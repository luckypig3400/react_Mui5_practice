import { createContext, useContext, useState } from 'react';

const GlobalVariablesContext = createContext();

export function GlobalVariablesProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <GlobalVariablesContext.Provider value={{ count, increment, decrement }}>
      {children}
    </GlobalVariablesContext.Provider>
  );
}

export function useCounter() {
  return useContext(GlobalVariablesContext);
}
