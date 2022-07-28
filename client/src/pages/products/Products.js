import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import ProductList from '../../components/product/ProductList';

const Products = () => {

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/products`).then((res) => { 
      setListProduct(res.data);
  });
  },[]);

  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
        </ol>
      </nav>
      <ProductList listProduct={listProduct} />
    </div>
  )
}

export default Products