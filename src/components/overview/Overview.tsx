import React from 'react';
import { useAppSelector } from '../../app/hooks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Overview: React.FC = () => {
  const { totalSum, average, numberOfItems } = useAppSelector(
    (state) => state.Costs,
  );

  return (
    <>
      <Container bsPrefix="overview-container">
        <Row className="mb-4">
          <Col as="h5">Overview</Col>
        </Row>
        <Row className="mb-4">
          <Col as="h5">Total Sum</Col>
          <Col as="h5">{totalSum}</Col>
        </Row>
        <Row className="mb-4">
          <Col as="h5">Average</Col>
          <Col as="h5">{average}</Col>
        </Row>
        <Row className="mb-4">
          <Col as="h5">Total Items</Col>
          <Col as="h5">{numberOfItems}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Overview;
