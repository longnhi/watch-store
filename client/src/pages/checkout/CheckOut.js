import React from 'react'

function CheckOut() {
  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
        <li className="breadcrumb-item active" aria-current="page">Đặt hàng</li>
        </ol>
    </nav>
    <form >
      <h1 className="h3 mb-3 fw-normal">Đặt hàng</h1>
      <div className="form-floating mb-3">
          <input type="text" className="form-control" id="fullname" placeholder="Họ tên" />
          <label htmlFor="fullname">Họ tên người nhận</label>
      </div>
      <div className="form-floating mb-3">
          <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" />
          <label htmlFor="phone">Số điện thoại</label>
      </div>
      <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="180 Cao Lỗ" />
          <label htmlFor="floatingInput">Địa chỉ nhận</label>
      </div>
      <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Đặt hàng</button>
      
  </form>
  </div>
  )
}

export default CheckOut