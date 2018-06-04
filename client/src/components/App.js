import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Home from './Home'
import Product from './Product'

const App = () =>
  <Router>
    <Home path="/" />
    <Product path="product/:productId" />
  </Router>

export default App