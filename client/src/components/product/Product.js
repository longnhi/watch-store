import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

const Product = (props) => {

    const [product,setProduct] = useState({});

    useEffect(() => {
        setProduct(props.product);
    },[product,props]);

    return (
        <div className="col-lg-3 p-3">
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
}

export default Product