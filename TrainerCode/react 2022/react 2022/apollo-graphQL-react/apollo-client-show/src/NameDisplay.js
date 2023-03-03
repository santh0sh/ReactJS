import React from "react";
import { useReactiveVar } from "@apollo/client";
import { Jumbotron } from "react-bootstrap";
import { nameVar } from "./cache";

function NameDisplay() {
  const name = useReactiveVar(nameVar);

  return name ? (
    <Jumbotron>
      <h1>{`Hello, ${name}!`}</h1>
      <p>This component is reading the client state and displaying the name!</p>
    </Jumbotron>
  ) : null;
}

export default NameDisplay;
