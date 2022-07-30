import React from 'react'
import Product from './Product';

const ProductList = (props) => {
    let listProduct = props.listProduct;


    return (
        <div className="row">
        { listProduct.map((product) => {
          return (
            <Product key={product.masp} product={product} />
          )
        })}
      </div>
    )
}

export default ProductList