import React, { useEffect } from "react";

import "./App.css";
import { getCosts } from "../components/costsSlice/costsSlice";
import { useAppDispatch } from "../app/hooks";

import Navigation from "../components/navigation/Navigation";



const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <Navigation/>
    </>
  );
};

export default App;
