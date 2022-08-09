import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {API} from '../../config/API';
import ProductOrderDetail from '../admin/orders/ProductOrderDetail';

const OrderDetail = () => {
    let { madh } = useParams();
    const [order, setOrder] = useState({});
    const [listOrderDetail, setListOrderDetail] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get(`${API}orders/bymadh/`+ madh, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setOrder(response.data[0]);
        }).catch((e) => {
            console.log(e);
        });

        axios.get(`${API}order/detail/`+madh, { 
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setListOrderDetail(response.data);
        }).catch((e) => {
            console.log(e);
        });
        axios.get(`${API}order/getsumpricebymadh/`+madh, {
            headers: {
            accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setTotal(response.data[0].tong);
        }).catch((e) => {
            console.log(e);
        });
    },[madh]);

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="/order">Đơn hàng</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Mã đơn hàng: {madh}</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-header">
                    <p>Người nhận: {order.nguoinhan}</p>
                    <p>Địa chỉ: {order.diachinhan}</p>
                    <p>Số điện thoại: {order.sodienthoainguoinhan}</p>
                    <p>Trạng thái: {order.trangthai}</p>
                    <p>Ngày đặt: {new Date(order.thoigiandat).toLocaleString()}</p>
                </div>
                <div className="card-body">
                <div className="table-responsive">
                    <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                        </tr>
                    </thead>
                    <tbody >
                        {listOrderDetail.map((orderDetail) =>{
                            return (<tr key={orderDetail.mactdh}>
                            <ProductOrderDetail masp={orderDetail.masp} />
                            <td>
                                {orderDetail.soluong}
                            </td>
                            <td>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(orderDetail.gia)}
                            </td>
                            </tr>)
                        })}
                        <tr>
                            <td colSpan="3">Tổng tiền</td>
                            <td>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="card-footer text-muted text-center">
                    {order.trangthai==="Đang xử lý"?(<a className='btn btn-primary ' href='/'>Hủy đơn</a>):(<a disabled className='btn btn-primary disabled' href='/'>Hủy đơn</a>)}
                </div>
            </div>
        </div>
    )
}

export default OrderDetail