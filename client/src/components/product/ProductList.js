import React, {useEffect, useState} from 'react'
import Product from './Product';

const ProductList = (props) => {
    const [listProduct,setListProduct] = useState([]);

    useEffect(() => {
        setListProduct(props.listProduct);
    },[listProduct,props]);

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