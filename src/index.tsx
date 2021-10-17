import { render } from "react-dom";

import { store } from "./app/store";
import { Provider } from "react-redux";

import App from "./app/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
