import {
  CACHED_URL_LOCAL_STORAGE_KEY,
  LOCAL_STORAGE_KEY,
} from '@/utils/constants';
import type { AuthResponse, GetAuthOptions, User } from './types';
import {
  getLocalStorage,
  setLocalStorage,
} from '@/utils/functions/local-storage';
import { decodeToken, isTokenActive } from '@/utils/functions';
import { ADMIN_ROUTES, AUTH_ROUTES } from '@/routes/routes';
import type { UserRole } from '@/types';

const REDIRECTION: Record<UserRole, string> = {
  admin: ADMIN_ROUTES.dashboard.path,
  user: ADMIN_ROUTES.dashboard.path,
  manager: ADMIN_ROUTES.product_management.path,
};

const isSafePath = (path: string | null | undefined) => {
  return path ? path.startsWith('/') : false;
};

const getAuth = (options: GetAuthOptions = {}): AuthResponse => {
  const isCacheRedirection = options.isCacheRedirection ?? false;

  if (typeof window === 'undefined') {
    return {
      isAuthenticated: false,
      role: '',
      redirectUrl: AUTH_ROUTES.login.path,
    };
  }

  const token = getLocalStorage<string>(LOCAL_STORAGE_KEY);
  const cachedRedirectUrl = getLocalStorage<string>(
    CACHED_URL_LOCAL_STORAGE_KEY,
  );

  const isAuthenticated = isTokenActive(token);

  let redirectUrl = AUTH_ROUTES.login.path;
  let role = '';

  if (isAuthenticated && token) {
    let user: User | null = null;

    try {
      user = decodeToken(token) as User;
    } catch {
      user = null;
    }

    if (!user?.role) {
      return {
        isAuthenticated: false,
        role: '',
        redirectUrl: AUTH_ROUTES.login.path,
      };
    }

    role = user.role;

    redirectUrl = isSafePath(cachedRedirectUrl)
      ? (cachedRedirectUrl as string)
      : REDIRECTION[role as UserRole];
  } else {
    if (token) {
      setLocalStorage(LOCAL_STORAGE_KEY, '');
    }
  }

  if (isCacheRedirection && !isAuthenticated) {
    const { pathname, search } = window.location;
    const fullUrl = pathname + search;

    if (isSafePath(fullUrl)) {
      setLocalStorage(CACHED_URL_LOCAL_STORAGE_KEY, fullUrl);
    }
  }

  return {
    isAuthenticated,
    role,
    redirectUrl,
  };
};

export default getAuth;
