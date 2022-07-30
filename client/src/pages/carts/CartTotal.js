import React, {useEffect, useState} from 'react'

const CartTotal = (props) => {
    let cart = props.cart;
    const [total,setTotal] = useState(0);

    const getTotal = () => {
        let gia = 0;
        cart.map((cartItem) =>
            gia += cartItem.soluong * cartItem.product.gia
        )
        setTotal(gia);
    };

    useEffect(() => {
        getTotal();
    })

    return (
        <td>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)} </td>
    )
}

export default CartTotal