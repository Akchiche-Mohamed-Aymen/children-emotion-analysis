import { createContext, useContext, useState } from "react";

// 1. Create context
const AppContext = createContext();

// 2. Create provider
export function AppProvider({ children }) {
  const [index, setIndex] = useState(1);

  return (
    <AppContext.Provider value={{ index, setIndex }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Hook to use context
export const useAppContext= ()=> useContext(AppContext)
