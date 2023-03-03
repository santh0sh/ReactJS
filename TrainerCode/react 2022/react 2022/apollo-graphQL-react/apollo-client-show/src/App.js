import React from "react";
import NameForm from "./NameForm";

import { cache } from "./cache";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import NameDisplay from "./NameDisplay";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//createStore(reducer,{})
const client = new ApolloClient({cache}); //{}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h2 className="header bg-info">Apollo useReactiveVar by Murthy</h2>
      <div className="input bg-warning">
        <NameForm />
      </div>
      <NameDisplay />
    </ApolloProvider>
  );
}
