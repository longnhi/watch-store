import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const CartHeader = () => {

    const [quantityProductCart, setQuantityProductCart] = useState(0);

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('cart'));
        let sl = 0
        if (storage) {
            sl = storage.length;
        }
        setQuantityProductCart(sl);
    },[quantityProductCart]);

    return (
        <li className="nav-item">
            <Link className="nav-link active position-relative" aria-current="page" to="/cart"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
            <span hidden className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
                {quantityProductCart}
                <span className="visually-hidden">unread messages</span>
            </span>
            &ensp;Giỏ hàng</Link>
            
        </li>
    )
}

export default CartHeader