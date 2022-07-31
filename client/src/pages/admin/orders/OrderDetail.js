import React, {  useState, useEffect }  from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductOrderDetail from './ProductOrderDetail';

const OrderDetail = () => {

  let { madh } = useParams();
  const [order, setOrder] = useState({});
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
      axios.get('http://localhost:3001/orders/getbymadh/'+ madh, {
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
          setListOrderDetail(response.data);
      }).catch((e) => {
          console.log(e);
      });

      axios.get('http://localhost:3001/order/getsumpricebymadh/'+madh, {
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
    <div className="row g-0 bg-light position-relative">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Chi tiết đơn hàng</h1>
      </div>
      <div className="col-md p-4 ps-md-0">
          <div className="card" style={{height: '100%'}}>
            <div className="card-header">
              <p className="card-text">Người nhận: {order.nguoinhan}</p>
              <p className="card-text">Địa chỉ nhận: {order.diachinhan} </p>
              <p className="card-text">Số điện thoại người nhận: {order.sodienthoai}</p>
              <p className="card-text">Trạng thái: {order.trangthai}</p>
              <p className="card-text">Ngày đặt: {new Date(order.thoigiandat).toLocaleString()}</p>
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
            <div className="card-footer text-muted d-flex justify-content-center">
                <Link to="/admin/orders" className="btn btn-outline-primary">THOÁT</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default OrderDetail