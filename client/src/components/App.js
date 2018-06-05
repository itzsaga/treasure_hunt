import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Product from './Product'
import Login from "./Login";
import NewUser from "./NewUser";

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:productId" component={Product} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={NewUser} />
    </Switch>
  </Router>

export default App