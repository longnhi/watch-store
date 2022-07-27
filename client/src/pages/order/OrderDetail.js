import React from 'react'

const OrderDetail = () => {
  return (
    <div className="container my-4">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
            <li className="breadcrumb-item"><a href="/order">Đơn hàng</a></li>
            <li className="breadcrumb-item active" aria-current="page">Mã đơn hàng: 1324523417</li>
            </ol>
        </nav>
        <div className="card">
            <div className="card-header">
                <p>Người nhận: Mark</p>
                <p>Địa chỉ: 180 Cao Lỗ</p>
                <p>Số điện thoại: 0825316954</p>
                <p>Trạng thái: Chờ xác nhận</p>
            </div>
            <div className="card-body">
                <table className="table  text-center align-middle">
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
                            <td><input type="number" style={{width: "40px"}} value={1} ></input></td>
                            <td>1.200.000 VNĐ</td>
                            
                        </tr>
                        <tr>
                            <th scope="row"><img src={process.env.PUBLIC_URL + '/assets/img/products/RA-AA0B02R19B-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></th>
                            <td>Orient SK RA-AA0B02R19B</td>
                            <td><input type="number"  style={{width: "40px"}} value={1}></input></td>
                            <td>1.200.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td colspan="3">Tổng tiền</td>
                            <td>2.400.000 VNĐ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted text-center">
                <a className='btn btn-primary' href='/'>Hủy đơn</a>
            </div>
        </div>
    </div>
  )
}

export default OrderDetail