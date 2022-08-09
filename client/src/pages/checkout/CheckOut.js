import React, { useState} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {API} from '../../config/API';

const CheckOut = () => {
  const [nguoiNhan, setNguoiNhan] = useState("");
  const [diaChiNhan, setDiaChiNhan] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart"));

  let navigate = useNavigate();

  if(JSON.parse(localStorage.getItem('cart')).length === 0){
    return (<Navigate to="/cart" replace={true} />)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}order/pay`, {
      nguoinhan: nguoiNhan,
      diachinhan: diaChiNhan,
      sodienthoai: soDienThoai,
      cart: cart,
    },{
      headers: { accessToken: localStorage.getItem("accessToken") },
    }).then((res) => {
        localStorage.removeItem("cart");
        navigate("/order/"+res.data.madh, { replace: true });
    }).catch((e) => {
        console.log(e);
    });
  };
  
  return (
    <>
      <div className="container text-center my-3" style={{maxWidth: "500px"}}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Đặt hàng</li>
          </ol>
      </nav>
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Đặt hàng</h1>
        <div className="form-floating mb-3">
            <input required type="text" className="form-control" id="fullname" value={nguoiNhan}  placeholder="Họ tên" onChange={(e) => {setNguoiNhan(e.target.value)}} />
            <label htmlFor="fullname">Họ tên người nhận</label>
        </div>
        <div className="form-floating mb-3">
            <input required type="text" className="form-control" id="phone" value={soDienThoai} placeholder="Số điện thoại" onChange={(e) => {setSoDienThoai(e.target.value)}} />
            <label htmlFor="phone">Số điện thoại</label>
        </div>
        <div className="form-floating mb-3">
            <input required type="text" className="form-control" id="floatingInput" value={diaChiNhan} placeholder="180 Cao Lỗ" onChange={(e) => {setDiaChiNhan(e.target.value)}} />
            <label htmlFor="floatingInput">Địa chỉ nhận</label>
        </div>
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Đặt hàng</button>
      </form>
    </div>
    </>
  )
}

export default CheckOut