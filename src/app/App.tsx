import React, { useEffect } from "react";
import { getCosts } from "../components/costsSlice/costsSlice";
import { useAppDispatch } from "../app/hooks";


const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herrro, React.</h1>
        </section>
      </main>
    </>
  );
};

export default App;
