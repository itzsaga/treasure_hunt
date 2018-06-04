import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import { getLatest } from '../redux/actions/productActions'

import Header from './Header'

class App extends Component {
  state = {}

  componentDidMount() {
    this.props.getLatest()
  }

  render() {
    if (this.props.latest[0]) {
      var latest = this.props.latest[0].map(product => {
        return <li key={product.id}>{product.name}</li>
      })
    }
    return (
      <div>
        <Header />
        <div className="container">
          {latest}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    latest: state.products
  }
}

export default connect(mapStateToProps, { getLatest })(App)