import React, { Component } from 'react'
import { connect } from 'react-redux'

import icon from '../images/th-icon.jpg'

class Product extends Component {
  state = {
    product: this.props.products.find(p => p.id == this.props.match.params.productId),
  }

  renderTags() {
    return this.state.product.tags.map(tag => (
      <span className="tag is-light is-rounded is-medium">{tag.name}</span>
    ))
  }

  render() {
    return(
      <div className="container">
        <div className="box" key={this.state.product.id}>
          <div className="media">
            <div className="media-left">
              <figure className="image">
                <img src={`../../${icon}`} alt="product image" />
              </figure>
            </div>
            <div className="media-content">
              <p><strong>{this.state.product.name}</strong></p>
              <p>{this.state.product.description}</p>
              <div className="tags">
                {this.renderTags()}
              </div>
            </div>
          </div>
        </div>
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