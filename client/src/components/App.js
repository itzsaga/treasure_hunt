import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import { getAll, getLatest } from '../redux/actions/productActions'

import Header from './Header'
import Hero from './Hero'
import ProductList from './ProductList'

class App extends Component {
  state = {
    latest: [],
    all: [],
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
      <div>
        <Header products={this.props.products} searching={this.searching} updateResults={this.updateResults} />
        {!this.state.search && <Hero />}
        <div className="container">
          {!this.state.search && <ProductList products={this.props.latest} searching={this.state.search} />}
          {this.state.search && <ProductList products={this.state.searchResults} searching={this.state.search} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    latest: state.products.slice(Math.max(state.products.length - 5, 1)),
    products: state.products,
  }
}

export default connect(mapStateToProps, { getAll, getLatest })(App)