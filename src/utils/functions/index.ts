import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logError = (error: unknown): void => {
  console.error('Error:', error);
};

export const errorHandler = <T>(
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
