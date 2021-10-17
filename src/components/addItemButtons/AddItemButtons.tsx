import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

interface AddItemButtonsProps {
  addItem: () => void;
  reset: () => void;
  toggleAddBtn: boolean;
}

const AddItemButtons: React.FC<AddItemButtonsProps> = ({
  addItem,
  reset,
  toggleAddBtn,
}) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        className="bg-light border ms-auto"
        variant="outline-info"
        onClick={() => reset()}
      >
        Reset
      </Button>
      <Button
        type="submit"
        variant="info"
        onClick={() => {
          addItem();
        }}
        disabled={toggleAddBtn}
      >
        Add
      </Button>
    </Stack>
  );
};

export default AddItemButtons;
