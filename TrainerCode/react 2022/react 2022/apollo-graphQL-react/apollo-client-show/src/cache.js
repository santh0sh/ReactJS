import { makeVar, InMemoryCache } from "@apollo/client";


export const nameVar = makeVar("");//users
export const cache = new InMemoryCache();//store


//export const accountsVar=makeVar([])

//nameVar is called Reactive variable

//portal  in react
