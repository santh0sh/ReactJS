import { createContext, useContext } from "react";

const Context = createContext("Default Value");

export function Main() {
  const value = "My Context Value";

  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}