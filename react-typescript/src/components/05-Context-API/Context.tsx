import React, { createContext, useState } from "react";

type Theme = "dark" | "light" | "system";
type ThemeState = {
    theme: string,
    setTheme: (theme: Theme) => void
}
type ThemeProps = {
    children: React.ReactNode,
    defaultTheme?: Theme
}

//create context
const AppContext = createContext<ThemeState | undefined>(undefined);


//create provider
const AppProvider = ({children, defaultTheme = "system"}:ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);  
  return <AppContext.Provider value={{
    theme,
    setTheme
  }}>
    {children}
  </AppContext.Provider>
}

export {AppContext, AppProvider}