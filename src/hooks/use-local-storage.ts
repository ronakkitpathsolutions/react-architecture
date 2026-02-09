import { errorHandler } from '@/utils/functions';
import { useState } from 'react';

/**
 * Custom hook to persist state in localStorage.
 *
 * Usage:
 * const { value, setValue, removeValue } = useLocalStorage<string>("keyName", "defaultValue");
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return errorHandler<T>(
      () => {
        if (typeof window === 'undefined') return initialValue;
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : initialValue;
      },
      () => initialValue,
    ) as T;
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    errorHandler<void>(() => {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    });
  };

  const removeValue = () => {
    errorHandler<void>(() => {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
      setStoredValue(initialValue);
    });
  };

  return { storedValue, setValue, removeValue };
}
