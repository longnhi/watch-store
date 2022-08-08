import React, {useEffect, useState} from 'react'
import axios from 'axios';
import CustomerItem from '../../../components/customers/admin/CustomerItem';
import {API} from '../../../config/API';

const ListCustomer = () => {
  const [listCustomer, setListCustomer] = useState([]);

  useEffect(() => {
    axios.get(`${API}customers`,{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      setListCustomer(response.data);
    });
  },[])

  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý khách hàng</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center align-middle">
          <thead>
            <tr>
              <th scope="col">Mã khách hàng</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listCustomer.map((customer) => {
              return (
                <tr key={customer.makh}>
                  <CustomerItem customer={customer} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListCustomer