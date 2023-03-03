import { createContext, useState, useContext, useMemo } from "react";

const UserContext = createContext({
  userName: "",
  setUserName: () => {}
});

export function Application() {
  const [userName, setUserName] = useState("Murthy");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);

  return <input type="text" value={userName} onChange={changeHandler} />;
}

function UserInfo() {
  const { userName } = useContext(UserContext);
  return (
    <div>
       <h4 className="text-success">in Child {userName}</h4>
       <GrandChild></GrandChild>
  </div>
  )
}


function GrandChild() {
  const { userName } = useContext(UserContext);
  return (
    <div>
       <h3 className="text-danger">In Grand Child : {userName}</h3>
       
  </div>
  )
}
/*
useMemo():
----------
useMemo is a built-in react hook, that can potentially make  app 
more performant, by managing unnecessary re-rendering.

The re-rendering process in react is fired, in every life cycle of a 
component every time an update occurs, and operations like “for loops” 
can be time, memory, processing power consuming.

Expensive operations, can harm the performance and thus lead to 
poor user experience.

Therefore, React released the memo hook with memoization.

Memoization is remembering or caching a value when the same parameters 
are passed in subsequently so we don't have to rerender every single time.

*/