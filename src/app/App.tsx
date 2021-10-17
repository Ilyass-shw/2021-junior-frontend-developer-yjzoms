import React, { useEffect } from "react";

import "./App.css";
import { getCosts } from "../components/costsSlice/costsSlice";
import { useAppDispatch } from "../app/hooks";

import Navigation from "../components/navigation/Navigation";
import AddItemForm from "../components/addItemForm/AddItemForm";



const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <Navigation/>
      <AddItemForm />
    </>
  );
};

export default App;
