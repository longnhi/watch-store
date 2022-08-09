import React, {  useState, useEffect }  from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductOrderDetail from './ProductOrderDetail';
import {API} from '../../../config/API';

const OrderDetail = () => {

  let { madh } = useParams();
  const [order, setOrder] = useState({});
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
      axios.get(`${API}orders/getbymadh/`+ madh, {
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
                      {listOrderDetail.map((orderDetail,index) =>{
                        return (<tr key={index}>
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
            <div className="card-footer text-center">
              <div className="justify-content-center ">
                {order.trangthai === "Đã hủy" && 
                  <>
                    <button  className="btn btn-outline-primary m-2 disabled">Giao hàng</button>
                    <button  className="btn btn-outline-primary m-2 disabled">Hủy đơn</button>
                    <button  className="btn btn-outline-primary m-2 disabled">Hoàn tất</button>
                    <Link to="/admin/orders"  className="btn btn-outline-primary m-2">Thoát</Link>
                  </>
                }
                {order.trangthai === "Đang xử lý" && 
                  <>
                    <button  className="btn btn-outline-primary m-2">Giao hàng</button>
                    <button  className="btn btn-outline-primary m-2">Hủy đơn</button>
                    <button  className="btn btn-outline-primary m-2 disabled">Hoàn tất</button>
                    <Link to="/admin/orders"  className="btn btn-outline-primary m-2">Thoát</Link>
                  </>
                }
                {order.trangthai === "Đang vận chuyển" &&  
                  <>
                    <button className="btn btn-outline-primary m-2 disabled">Giao hàng</button>
                    <button className="btn btn-outline-primary m-2">Hủy đơn</button>
                    <button className="btn btn-outline-primary m-2">Hoàn tất</button>
                    <Link to="/admin/orders" className="btn btn-outline-primary m-2">Thoát</Link>
                  </>
                }
                {order.trangthai === "Hoàn tất" && 
                  <>
                    <button className="btn btn-outline-primary m-2 disabled">Giao hàng</button>
                    <button className="btn btn-outline-primary m-2 disabled">Hủy đơn</button>
                    <button className="btn btn-outline-primary m-2 disabled">Hoàn tất</button>
                    <Link to="/admin/orders" className="btn btn-outline-primary m-2">Thoát</Link>
                  </>
                }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default OrderDetail