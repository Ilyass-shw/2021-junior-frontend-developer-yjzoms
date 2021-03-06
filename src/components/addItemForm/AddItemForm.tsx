import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';

import { addCostItem } from '../costsSlice/costsSlice';

import AddItemButtons from '../addItemButtons/AddItemButtons';
import AddItemFormInfo from '../addItemFormInfo/AddItemFormInfo';
import { calculateGrossMoney } from '../helpers/calculateCostProtions';

import Form from 'react-bootstrap/Form';

const AddItemInputs: React.FC = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [netInputValue, setNetInputValue] = useState('');
  const [togglAddBtn, setToggleAddBtn] = useState(true);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setNameInputValue(''), setNetInputValue('');
  };

  const addItem = (): void => {
    if (nameInputValue && netInputValue) {
      dispatch(
        addCostItem({ name: nameInputValue, net: parseInt(netInputValue) }),
      );
      resetForm();
      setToggleAddBtn(true);
    }
  };

  useEffect(() => {
    if (nameInputValue && netInputValue) {
      setToggleAddBtn(false);
    } else {
      setToggleAddBtn(true);
    }
  }, [nameInputValue, netInputValue]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="FormName">
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

        <Form.Group className="mb-3" controlId="FormName">
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
        <AddItemFormInfo
          gross={
            netInputValue ? calculateGrossMoney(parseInt(netInputValue)) : 0
          }
        />
        <AddItemButtons
          addItem={addItem}
          reset={resetForm}
          toggleAddBtn={togglAddBtn}
        />
      </Form>
    </>
  );
};

export default AddItemInputs;
