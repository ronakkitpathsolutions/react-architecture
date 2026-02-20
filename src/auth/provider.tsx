import { useMemo, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';
import type { User } from './types';
import { decodeToken } from '@/utils/functions';
import AuthContext from './context';
import { ADMIN_ROUTES, AUTH_ROUTES } from '@/routes/routes';
import type { UserRole } from '@/types';

interface AuthProviderProps {
  children: React.ReactNode;
}

const REDIRECTION: Record<UserRole, string> = {
  admin: ADMIN_ROUTES.dashboard.path,
  user: ADMIN_ROUTES.dashboard.path,
  manager: ADMIN_ROUTES.product_management.path,
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const {
    storedValue: token,
    setValue: setToken,
    removeValue: removeToken,
  } = useLocalStorage<string>(LOCAL_STORAGE_KEY, '');

  const user: User = useMemo(() => {
    if (!token) return {};
    try {
      return decodeToken(token) as User;
    } catch {
      return {};
    }
  }, [token]);

  const role = user?.role ?? '';

  const redirectUrl = useMemo(() => {
    if (!role) return AUTH_ROUTES.login.path;
    return REDIRECTION[role as UserRole];
  }, [role]);

  const resetAllStores = useCallback(() => {
    // reset zustand stores here
  }, []);

  const login = useCallback(
    (newToken: string) => {
      setToken(newToken);
    },
    [setToken],
  );

  const logout = useCallback(() => {
    removeToken();
    resetAllStores();
  }, [removeToken, resetAllStores]);

  /**
   * Memoize context value
   * Prevents full app re-render unless dependencies actually change
   */
  const contextValue = useMemo(
    () => ({
      user,
      role: user?.role || '',
      redirectUrl,
      login,
      logout,
    }),
    [user, redirectUrl, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
