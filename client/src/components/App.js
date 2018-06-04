import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import { getAll, getLatest } from '../redux/actions/productActions'

import Header from './Header'
import Hero from './Hero'

class App extends Component {
  state = {
    latest: [],
    all: [],
    search: false,
  }

  componentDidMount() {
    this.props.getLatest()
    this.props.getAll()
  }

  render() {
    const latest = this.props.latest.map(product => {
      return <li key={product.id}>{product.name}</li>
    })
    return (
      <div>
        <Header />
        {!this.state.search && <Hero />}
        <div className="container">
          {latest}
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