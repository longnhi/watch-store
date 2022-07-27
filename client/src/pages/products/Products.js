import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

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
      <div className="row">
        { listProduct.map((product) => {
          return (
            <div key={product.masp} className="col-lg-3 p-3">
              <div className="card" style={{width: '100%'}}>
                <img src={process.env.PUBLIC_URL + product.hinhanh} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-center text-truncate">{product.tensp}</h5>
                  <p className="card-text text-truncate">{product.mota}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Giá: {product.gia} VNĐ</li>
                </ul>
                <div className="card-body d-flex justify-content-around">
                  <Link to="/" className="card-link link-dark"><i className="fa fa-cart-plus fa-2x"/></Link>
                  <Link to={`/products/${product.masp}`} className="card-link link-dark"><i className="fa fa-search fa-2x" /></Link>
                  <Link to="/login" className="card-link link-dark"><i className="fa fa-heart-o fa-2x" /></Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products