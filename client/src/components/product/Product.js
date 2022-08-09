import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import ButtonFavorite from '../favorite/ButtonFavorite';

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
    };

    return (
        <>
            <div className="col-lg-3 p-3">
                <div className="card" style={{width: '100%'}}>
                    <div className="text-center">
                        <Link className='text-decoration-none' to={`/products/${product.masp}`}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/products/" + product.hinhanh} 
                                style={{width: '90%',height: '200px'}} className="card-img-top" alt="..." />
                        </Link>
                    </div>
                    <div className="card-body">
                        <Link className='text-decoration-none text-dark' to={`/products/${product.masp}`}><h5 className="card-title text-uppercase text-center text-truncate">{product.tensp}</h5></Link>
                        <p className="card-text text-truncate">{product.mota}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {product.soluong===0 &&<li className="list-group-item text-danger"> Sản phẩm đang hết hàng</li>} 
                        {product.soluong!==0 && <li className="list-group-item">Giá: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia)}</li>}
                    </ul>
                    <div className="card-body d-flex justify-content-around">
                        {product.trangthai===0 || product.soluong === 0 ? (
                            <button onClick={() => {addToCart()}} className="card-link btn btn-light link-dark disabled">
                                <i className="fa fa-cart-plus fa-2x"/>
                            </button>
                        ):(
                            <button onClick={() => {addToCart()}} className="card-link btn link-dark">
                                <i className="fa fa-cart-plus fa-2x"/>
                            </button>
                        )}
                        <button onClick={() => {navigate(`/products/${product.masp}`,{replace:true})}} className="card-link btn link-dark"><i className="fa fa-search fa-2x" /></button>
                        <ButtonFavorite masp={product.masp} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product