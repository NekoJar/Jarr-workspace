import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  // Check if localStorage is available
  const localStorageAvailable: Storage | null =
    typeof window !== "undefined" ? window.localStorage : null;

  const [value, setValue] = useState<T>(() => {
    if (localStorageAvailable) {
      const storedValue = localStorageAvailable.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } else {
      // If localStorage is not available (server-side rendering), return initialState
      return initialState;
    }
  });

  useEffect(() => {
    if (localStorageAvailable) {
      localStorageAvailable.setItem(key, JSON.stringify(value));
    }
  }, [value, key, localStorageAvailable]);

  return [value, setValue];
}
