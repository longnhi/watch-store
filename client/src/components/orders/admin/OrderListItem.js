import React from 'react'
import {Link} from 'react-router-dom';

const OrderListItem = (props) => {

    const order = props.order;

    return (
        <>
            <td>{order.madh}</td>
            <td>{order.nguoinhan}</td>
            <td>{order.diachinhan}</td>
            <td>{order.sodienthoainguoinhan}</td>
            <td>{order.trangthai}</td>
            <td>{new Date(order.thoigiandat).toLocaleString()}</td>
            <td><Link className="btn" to={`/admin/orders/detail/${order.madh}`}><i className="fa fa-eye"  /></Link></td>
        </>
    )
}

export default OrderListItem