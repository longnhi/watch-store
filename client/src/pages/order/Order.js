import React from 'react'

function Order() {
  return (
    <div className="container my-4">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
            <li className="breadcrumb-item active" aria-current="page">Đơn hàng</li>
            </ol>
        </nav>
        <div className="card">
            <div className="card-header">
                <p>Danh sách đơn hàng</p>
            </div>
            <div className="card-body">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Người nhận</th>
                    <th scope="col">Địa chỉ nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1324523417</th>
                    <td>Mark</td>
                    <td>180 Cao Lỗ</td>
                    <td>Chờ xác nhận</td>
                    <td> <a className="nav-link" href="/order/1324523417"><i className="fa fa-eye" />&ensp;Xem chi tiết</a></td>
                </tr>
                <tr>
                    <th scope="row">2384561472</th>
                    <td>Jacob</td>
                    <td>181 cao Lỗ</td>
                    <td>Đang vận chuyển</td>
                    <td> <a className="nav-link" href="/order/2384561472"><i className="fa fa-eye" />&ensp;Xem chi tiết</a></td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className="card-footer text-muted text-center">
            </div>
        </div>
    </div>
  )
}

export default Order