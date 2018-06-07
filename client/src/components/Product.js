import React, { Component } from 'react'
import { connect } from 'react-redux'

class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const products = this.props.products
    const product = products.find(p => p.id == this.props.match.params.productId)
    this.setState({
      product: product
    })
  }

  render() {
    return(
      <div>
        {`${this.state.product}`}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(Product)