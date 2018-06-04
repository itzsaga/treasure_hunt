import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import { getLatest } from '../redux/actions/productActions'

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
        <h1>Welcome to My Starter App</h1>
        <h3>It has hot module reloading built in!</h3>
        {latest}
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