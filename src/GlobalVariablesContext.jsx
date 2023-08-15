import { createContext, useContext, useState } from 'react';

const GlobalVariablesContext = createContext();

export function GlobalVariablesProvider({ children }) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [themeMode, setThemeMode] = useState("light");

  const incrementCounter1 = () => {
    setCounter1(prevCounter => prevCounter + 1);
  };

  const decrementCounter1 = () => {
    setCounter1(prevCounter => prevCounter - 1);
  };

  const incrementCounter2 = () => {
    setCounter2(prevCounter => prevCounter + 1);
  };

  const decrementCounter2 = () => {
    setCounter2(prevCounter => prevCounter - 1);
  };

  const incrementCounter3 = () => {
    setCounter3(prevCounter => prevCounter + 1);
  };

  const decrementCounter3 = () => {
    setCounter3(prevCounter => prevCounter - 1);
  };

  return (
    <GlobalVariablesContext.Provider
      value={{
        counter1,
        incrementCounter1,
        decrementCounter1,
        counter2,
        incrementCounter2,
        decrementCounter2,
        counter3,
        incrementCounter3,
        decrementCounter3,
        themeMode,
        setThemeMode
      }}
    >
      {children}
    </GlobalVariablesContext.Provider>
  );
}

export function useGlobalVariables() {
  return useContext(GlobalVariablesContext);
}
