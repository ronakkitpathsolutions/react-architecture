type User = {
  id?: string;
  name?: string;
  role?: string;
  email?: string;
  exp?: number;
  [key: string]: unknown;
};

type AuthContextType = {
  user: User | null;
  role: string;
  redirectUrl: string;
  login: (newToken: string) => void;
  logout: () => void;
};

type GetAuthOptions = {
  isCacheRedirection?: boolean;
};

type AuthResponse = {
  isAuthenticated: boolean;
  role: string;
  redirectUrl: string;
};

export type { User, AuthContextType, GetAuthOptions, AuthResponse };
