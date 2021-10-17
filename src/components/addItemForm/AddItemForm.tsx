import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const AddItemForm: React.FC = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [netInputValue, setNetInputValue] = useState("");

  return (
    <>
      <Form>
        <Form.Group controlId="FormName">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={nameInputValue}
            placeholder="Enter a name"
            onChange={(e) => setNameInputValue(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="FormName">
          <Form.Label>Net *</Form.Label>
          <Form.Control
            required
            type="number"
            name="net"
            value={netInputValue}
            placeholder="Enter an amount"
            onChange={(e) => setNetInputValue(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddItemForm;
