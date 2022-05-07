import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { FilterProvider, CartProvider, WishlistProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
    <FilterProvider >
      <Router>
          <App />
      </Router>
    </FilterProvider>
    </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
