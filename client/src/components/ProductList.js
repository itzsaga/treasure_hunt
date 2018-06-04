import React from 'react'
import { Link } from '@reach/router'
import icon from '../images/th-icon.jpg'

const ProductList = ({ products, searching }) => {
  const title = searching ? <h2 className="title is-2">Search Results:</h2> : <h2 className="title is-2">Latest Treasures:</h2>
  const productsList = products.map((product, i) => {
    const linkTo = `product/${product.id}`
    return (
    <div className="box" key={product.id}>
      <div className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={icon} alt="product image" />
          </figure>
        </div>
        <div className="media-content">
          <p><strong>{product.name}</strong></p>
          <p>{product.description}</p>
          <div id="more-info-button">
            <Link to={linkTo}><button value={product.id} className="button is-info">More Info</button></Link>
          </div>
        </div>
      </div>
    </div>
    )
  })
  return (
    <div id="products">
      {title}
      {productsList}
    </div>
  )
}

export default ProductList