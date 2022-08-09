import React, { useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const Cart = () => {

    const [cart, setCart] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        let stogare = JSON.parse(localStorage.getItem('cart'));
        if (stogare) {
            setCart(stogare);
        }
    },[]);

    const removeCartItem = () => {
        window.location.reload();
    }

    return (
        <div className="container my-4 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                </ol>
            </nav>
            {(cart.length === 0) ? (<>Chưa có sản phẩm trong giỏ hàng</>):(<>
            <table className="table text-center align-middle">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tên</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {cart.map((cartItem) =>{
                        return (<tr key={cartItem.product.masp}>
                            <CartItem masp={cartItem.product.masp} product={cartItem.product} soluong={cartItem.soluong} removeCartItem={removeCartItem} setCart={setCart} />
                        </tr>)
                    })}
                    <tr>
                        <td colSpan="3">Tổng tiền</td>
                        <CartTotal cart={cart} />
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={() => {if(!localStorage.getItem('accessToken')){navigate('/login',{replace: true })} else navigate('/checkout',{replace: true })}} >Thanh toán</button>
            </div>
                </>)}
        </div>
    )
}

export default Cart