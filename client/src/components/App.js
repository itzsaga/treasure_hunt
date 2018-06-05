import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Product from './Product'

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="product/:productId" component={Product} />
    </Switch>
  </Router>

export default App