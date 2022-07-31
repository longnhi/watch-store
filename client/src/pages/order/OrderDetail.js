import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const OrderDetail = () => {
    let { madh } = useParams();
    const [order, setOrder] = useState({});
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/orders/bymadh/'+ madh, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setOrder(response.data[0]);
        }).catch((e) => {
            console.log(e);
        });

        axios.get('http://localhost:3001/order/detail/'+madh, { 
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setOrderDetail(response.data);
            console.log(response.data);
            console.log(orderDetail);
        }).catch((e) => {
            console.log(e);
        });
    },[madh,orderDetail]);



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
                    <table className="table text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><img src={process.env.PUBLIC_URL + '/assets/img/products/CASIO-AE-1200WHD-1AVDF-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></th>
                                <td>Casio AE-1200WHD-1AVDF</td>
                                <td></td>
                                <td>1.200.000 VNĐ</td>
                                
                            </tr>
                            
                            <tr>
                                <td colSpan="3">Tổng tiền</td>
                                <td>2.400.000 VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted text-center">
                    {order.trangthai==="Đang xử lý"?(<a className='btn btn-primary ' href='/'>Hủy đơn</a>):(<a disabled className='btn btn-primary disabled' href='/'>Hủy đơn</a>)}
                </div>
            </div>
        </div>
    )
}

export default OrderDetail