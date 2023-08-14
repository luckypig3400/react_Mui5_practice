// CounterContext.js
import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
