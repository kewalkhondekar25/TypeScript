import React, { createContext } from "react";

//create context
const AppContext = createContext<string | undefined>(undefined);

//create provider
const AppProvider = ({children}:{children: React.ReactNode}) => {
  return <AppContext.Provider value={"hello"}>
    {children}
  </AppContext.Provider>
}

export {AppContext, AppProvider}