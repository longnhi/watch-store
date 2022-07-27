import React from 'react'
import {Link} from 'react-router-dom'

const Cart = () => {
    return (
        <div className="container my-4 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                </ol>
            </nav>
            <table className="table text-center align-middle">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tên</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td><img src={process.env.PUBLIC_URL + '/assets/img/products/CASIO-AE-1200WHD-1AVDF-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
                        <td>Casio AE-1200WHD-1AVDF</td>
                        <td><input type="number" style={{width: "40px"}} value={1} ></input></td>
                        <td>1.200.000 VNĐ</td>
                        <td><Link className='btn btn-outline-success' to='/'><i className="fa fa-trash"></i></Link></td>
                    </tr>
                    <tr>
                        <td><img src={process.env.PUBLIC_URL + '/assets/img/products/RA-AA0B02R19B-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
                        <td>Orient SK RA-AA0B02R19B</td>
                        <td><input type="number"  style={{width: "40px"}} value={1}></input></td>
                        <td>1.200.000 VNĐ</td>
                        <td><Link className='btn btn-outline-success' to='/'><i className="fa fa-trash"></i></Link></td>
                    </tr>
                    <tr>
                        <td colspan="3">Tổng tiền</td>
                        <td>2.400.000 VNĐ</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center'>
                <Link className='btn btn-primary' to='/checkout'>Thanh toán</Link>
            </div>
        </div>
    )
}

export default Cart