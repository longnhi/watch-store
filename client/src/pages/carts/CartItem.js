import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {API} from '../../config/API'

const CartItem = (props) => {
    let masp = props.masp;
    const [product,setProduct] = useState(props.product);
    const [soluong, setSoluong] = useState(props.soluong);

    useEffect(() => {
        axios.get(`${API}products/${props.product.masp}`).then((res) => { 
            if (res.data.length === 0){
            }  else {
                let cart = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : [];
                let cartItem = cart.find(item => item.product.masp === parseInt(props.product.masp));
                cartItem.product = res.data[0];
                localStorage.setItem('cart', JSON.stringify(cart));
                props.setCart(JSON.parse(localStorage.getItem('cart')));
                setProduct(res.data[0]);
            }
        });
    },[props]);

    const removeCartItem = () => {
        let cart = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : [];
        cart = cart.filter(cartItem => cartItem.product.masp !== masp);
        localStorage.setItem('cart', JSON.stringify(cart));
        props.removeCartItem();
    };

    const onChange = (e) => {
        let cart = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : [];
        let cartItem = cart.find(item => item.product.masp === parseInt(masp));
        if(e.target.value <1){
            setSoluong(1);
            cartItem.soluong = 1;
        }else if(e.target.value > product.soluong){
            setSoluong(product.soluong);
            cartItem.soluong = product.soluong;
        }else{
            setSoluong(e.target.value);
            cartItem.soluong = e.target.value;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        props.setCart(JSON.parse(localStorage.getItem('cart')));
    };

    return (
        <>
            <td><Link to ={`/products/${masp}`}><img src={process.env.PUBLIC_URL + "/assets/img/products/" + product.hinhanh} style={{width: "100px"}} className="card-img-top" alt="..." /></Link></td>
            <td><Link to ={`/products/${masp}`} className="text-decoration-none">{product.tensp}</Link></td>
            <td><input type="number" style={{width: "40px"}} value={soluong} onChange={onChange}></input></td>
            <td>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia*soluong)} </td>
            <td><button className='btn btn-outline-success' onClick={removeCartItem}><i className="fa fa-trash"></i></button></td>
        </>
    )
}

export default CartItem