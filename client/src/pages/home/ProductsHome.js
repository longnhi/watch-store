import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductsHome = () => {

    const [listNewProduct, setListNewProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/productsnew`).then((res) => { 
        setListNewProduct(res.data);
    });
    },[]);

    return (
        <div className="container my-4">
            <h4 className="text-center">Sản phẩm mới</h4>
            <div className="row">
            { listNewProduct.map((product) => {
                return (
                    <div key={product.masp} className="col-lg-4 p-3">
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
                        <Link to={`/products/${product.masp}`} className="card-link link-dark stretched-link" style={{position: "relative"}}><i className="fa fa-search fa-2x" /></Link>
                        <Link to="/login" className="card-link link-dark"><i className="fa fa-heart-o fa-2x" /></Link>
                        </div>
                    </div>
                    </div>
                )
            })}
                
            </div>
            <div className="text-center my-3">
                <Link className="btn btn-outline-primary" to='/products'>Xem thêm</Link>
            </div>
        </div>
    )
}

export default ProductsHome