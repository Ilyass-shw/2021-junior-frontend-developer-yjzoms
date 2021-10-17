import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/RoW";

interface AddItemFormInfoProps {
  gross: number;
}
const AddItemFormInfo: React.FC<AddItemFormInfoProps> = ({ gross }) => {
  return (
    <Row className="text-end">
      <Col xs={{ span: 3, offset: 6 }}>
        <div className=" ms-auto">
          <h6>Tax</h6>
          <h5>16,00 %</h5>
        </div>
      </Col>
      <Col xs={{ span: 3 }}>
        <div>
          <h6>Gross</h6>
          <h5>{gross.toFixed(2)} €</h5>
        </div>
      </Col>
    </Row>
  );
};

export default AddItemFormInfo;
