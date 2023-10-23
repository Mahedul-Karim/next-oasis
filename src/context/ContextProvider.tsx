"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState, useContext, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type Data = {
  isDarkMode: boolean;
  setIsDarkMode: any;
  user: User | null;
  setUser: any;
};

const Context = createContext<Data>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  user: null,
  setUser: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const ContextProvider: React.FC<Props> = function ({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("oasisUser") as string)) {
      //@ts-ignore
      setUser(JSON.parse(localStorage.getItem("oasisUser")));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ isDarkMode, setIsDarkMode, user, setUser }}>
        {children}
      </Context.Provider>
    </QueryClientProvider>
  );
};

export const useCtx = function () {
  return useContext(Context);
};

export default ContextProvider;
