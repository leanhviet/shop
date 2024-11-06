import { createContext, useContext } from "react";

const Context = createContext();
function ContextProvider({ children, ...props }) {
  const value = { ...props };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useData() {
  const context = useContext(Context);
  if (typeof context === "undefined")
    throw new Error("useContext must be used within a ContextProvider");
  return context;
}

export { ContextProvider, useData };
