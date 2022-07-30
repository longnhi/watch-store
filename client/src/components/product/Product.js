import React from 'react'
import {useNavigate} from 'react-router-dom';

const Product = (props) => {
    let product = props.product;
    let navigate = useNavigate();

    const addToCart = () => {
        let cart = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : [];
        let cartItem = cart.find(item => item.product.masp === parseInt(props.product.masp));
        if(cartItem){
            cartItem.soluong+=1;
        }else{
            cart.push({product: product, soluong: 1});
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/cart',{replace: true});
        //window.location.reload();
    };

    const addFavorite = () => {
        navigate("/favorite",{ replace: true });
    };

    return (
        <>
            <div className="col-lg-3 p-3">
                <div className="card" style={{width: '100%'}}>
                <img src={process.env.PUBLIC_URL + product.hinhanh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-uppercase text-center text-truncate">{product.tensp}</h5>
                    <p className="card-text text-truncate">{product.mota}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Giá: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia)}</li>
                </ul>
                <div className="card-body d-flex justify-content-around">
                    <button onClick={() => {addToCart()}} className="card-link btn link-dark"><i className="fa fa-cart-plus fa-2x"/></button>
                    <button onClick={() => {navigate(`/products/${product.masp}`,{replace:true})}} className="card-link btn link-dark"><i className="fa fa-search fa-2x" /></button>
                    <button onClick={() => {addFavorite()}} to="/login" className="card-link btn link-dark"><i className="fa fa-heart-o fa-2x" /></button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Product