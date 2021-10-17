import React, { useEffect } from "react";

import "./App.css";
import { getCosts } from "../components/costsSlice/costsSlice";
import { useAppDispatch } from "../app/hooks";

import Navigation from "../components/navigation/Navigation";
import AddItemForm from "../components/addItemForm/AddItemForm";
import Overview from "../components/overview/Overview";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <Navigation />
      <Container>
        <Row md={5} className="pt-5">
          <Col md={5} className="px-md-0">
            <AddItemForm />
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Overview />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
