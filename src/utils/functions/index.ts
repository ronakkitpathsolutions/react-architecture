import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jwtDecode } from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';

interface MyJwtPayload extends JwtPayload {
  [key: string]: unknown;
}

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const capitalize = (value: string): string => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const logError = (error: unknown): void => {
  console.error('Error:', error);
};

const errorHandler = <T>(
  handleTry: () => T,
  handleCatch?: (error: unknown) => T | null,
  handleFinally?: () => void,
): T | null => {
  try {
    const response = handleTry();
    return response;
  } catch (error) {
    logError(error);
    if (typeof handleCatch === 'function') {
      return handleCatch(error);
    }
    return null;
  } finally {
    if (typeof handleFinally === 'function') {
      handleFinally();
    }
  }
};

export const decodeToken = <T extends object = MyJwtPayload>(
  token?: string | null,
): T | null => {
  if (!token) return null;

  try {
    return jwtDecode<T>(token);
  } catch (error) {
    logError(error);
    return null;
  }
};

export const isTokenActive = (token?: string | null): boolean => {
  const decoded = decodeToken<MyJwtPayload>(token);
  if (!decoded?.exp) return false;

  const now = Math.floor(Date.now() / 1000);
  return decoded.exp > now;
};

export { cn, errorHandler, capitalize };
