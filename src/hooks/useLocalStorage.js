import { useState, useEffect } from "react";

function useLocalStorage(storage, startingCollection) {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(storage)) || startingCollection;
  });

  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(value));
  }, [value, storage]);

  return [value, setValue];
}

export default useLocalStorage;
