import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Hero from './Hero'
import ProductList from './ProductList'

class Home extends Component {
  render() {
    return (
      <div>
        {!this.props.search && <Hero />}
        <div className="container">
          {!this.props.search && <ProductList products={this.props.latest} searching={this.props.search} />}
          {this.props.search && <ProductList products={this.props.searchResults} searching={this.props.search} />}
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

export default connect(mapStateToProps, null)(Home)