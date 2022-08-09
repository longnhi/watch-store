import React, { useEffect, useState} from 'react'
import axios from 'axios';
import {API} from '../../config/API';

const Order = () => {
    const [listOrder,setListOrder] = useState([]);

    useEffect(() => {
        axios.get(`${API}orders/myorder`, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }).then((response) => {
            setListOrder(response.data);
            console.log(response.data);
          });
    }, []);

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                <li className="breadcrumb-item active" aria-current="page">Đơn hàng</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-header">
                    <p>Danh sách đơn hàng</p>
                </div>
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Người nhận</th>
                        <th scope="col">Địa chỉ nhận</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { listOrder.map((order)=>{
                        return (
                            <tr key={order.madh}>
                                <th scope="row">{order.madh}</th>
                                <td>{order.nguoinhan}</td>
                                <td>{order.diachinhan}</td>
                                <td>{order.sodienthoainguoinhan}</td>
                                <td>{order.trangthai}</td>
                                <td> <a className="nav-link" href={"/order/"+order.madh}><i className="fa fa-eye" />&ensp;Xem chi tiết</a></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                <div className="card-footer text-muted text-center">
                </div>
            </div>
        </div>
    )
}

export default Order