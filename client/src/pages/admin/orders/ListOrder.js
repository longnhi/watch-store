import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

const ListOrder = () => {

  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/orders/list',{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      setListOrder(response.data);
    });
  },[])

  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý đơn hàng</h1>
      </div>
      <h2>Đơn hàng</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center align-middle">
          <thead>
            <tr>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Tên người nhận</th>
              <th scope="col">Địa chỉ nhận</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listOrder.map((order) => {
              return (
                <tr key={order.madh}>
                  <td>{order.madh}</td>
                  <td>{order.nguoinhan}</td>
                  <td>{order.diachinhan}</td>
                  <td>{order.sodienthoainguoinhan}</td>
                  <td>{order.trangthai}</td>
                  <td>{new Date(order.thoigiandat).toLocaleString()}</td>
                  <td><Link className="btn" to={`/admin/orders/detail/${order.madh}`}><i className="fa fa-eye"  /></Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListOrder