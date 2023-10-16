"use client";

import { createContext, useState, useContext, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type Data = {
  isDarkMode: boolean;
  setIsDarkMode: any;
};

const Context = createContext<Data>({
  isDarkMode:false,
  setIsDarkMode:()=>{}
});

const ContextProvider: React.FC<Props> = function ({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDarkMode]);

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export const useCtx = function () {
  return useContext(Context);
};

export default ContextProvider;
