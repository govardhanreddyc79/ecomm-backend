import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { FilterProvider, CartProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <FilterProvider >
      <Router>
          <App />
      </Router>
    </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
