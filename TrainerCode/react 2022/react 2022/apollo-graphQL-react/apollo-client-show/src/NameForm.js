import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { nameVar } from "./cache";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          nameVar(name);
          setName("");
        }}
      >
        Update Name
      </Button>
    </Form>
  );
}

export default NameForm;
