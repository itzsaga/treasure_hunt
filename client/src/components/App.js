import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getAll, getLatest } from '../redux/actions/productActions'

import Home from './Home'
import Product from './Product'
import Login from './Login'
import NewUser from './NewUser'
import Header from './Header'

class App extends Component {
  state = {
    search: false,
    searchResults: [],
  }

  componentDidMount() {
    this.props.getLatest()
    this.props.getAll()
  }

  searching = (bool) => {
    this.setState({
      search: bool
    })
  }

  updateResults = (results) => {
    this.setState({
      searchResults: results
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header products={this.props.products} searching={this.searching} updateResults={this.updateResults} />
          <Switch>
            <Route exact path="/" render={() => <Home search={this.state.search} searchResults={this.state.searchResults} />} />
            <Route path="/product/:productId" component={Product} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={NewUser} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    latest: state.products.slice(Math.max(state.products.length - 5, 1)),
    products: state.products,
  }
}

export default connect(mapStateToProps, { getAll, getLatest})(App)