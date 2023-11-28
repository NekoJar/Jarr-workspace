import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // Check if localStorage is available
  const localStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const [value, setValue] = useState(function () {
    if (localStorageAvailable) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } else {
      // If localStorage is not available (server-side rendering), return initialState
      return initialState;
    }
  });

  useEffect(
    function () {
      if (localStorageAvailable) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [value, key, localStorageAvailable]
  );

  return [value, setValue];
}
