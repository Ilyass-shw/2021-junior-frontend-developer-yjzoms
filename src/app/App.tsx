import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import "./App.css";

import Navigation from "../components/navigation/Navigation";
import AddItemForm from "../components/addItemForm/AddItemForm";
import Overview from "../components/overview/Overview";
import CostsTable from "../components/costsTable/CostsTable";
import { getCosts } from "../components/costsSlice/costsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const App: React.FC = () => {
  const dataFetching = useAppSelector((state) => state.Costs.FetchStatus);
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
          <Col
            md={{ span: 6, offset: 1 }}
            className="pe-md-0  px-sm-0 pt-md-0 my-5 mt-md-0"
          >
            <Overview />
          </Col>
        </Row>
        <Row md={2}>
          {dataFetching === "failed" && <p>Fetching Data failed!</p>}
          {dataFetching === ("Loading" || "idle") && (
            <Spinner animation="grow" variant="info" />
          )}
          {dataFetching === "succeeded" && <CostsTable />}
        </Row>
      </Container>
    </>
  );
};

export default App;
