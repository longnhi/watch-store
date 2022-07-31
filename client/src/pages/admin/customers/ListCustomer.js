import React, {useEffect, useState} from 'react'
import axios from 'axios';

const ListCustomer = () => {
  const [listCustomer, setListCustomer] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/customers',{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      setListCustomer(response.data);
    });
  },[])

  const lock = () => {
    console.log("lock");
  };

  const unlock = () => {
    console.log("unlock lock");
  };

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
                  <td>{customer.makh}</td>
                  <td>{customer.hoten}</td>
                  <td>{customer.sodienthoai}</td>
                  <td>{customer.email}</td>
                  <td>{customer.status===1?"Đang hoạt động":"Đã khóa"}</td>
                  <td>{customer.status===1? (
                    <button className="btn" onClick={lock(customer.email)}><i className="fa fa-unlock-alt"/></button>
                  ):(
                    <button className="btn" onClick={unlock(customer.email)}><i className="fa fa-lock"/></button>
                  )}
                  </td>
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