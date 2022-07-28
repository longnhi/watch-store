import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {

    const [cartState, setCartState] = useState([]);
    
    const [gia, setGia] = useState(0);

    useEffect(() => {
       setCartState([...cartState,{masp:"1",soluong:1,gia:1000000}]);
    }, []);
    return (
        <div className="container my-4 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                </ol>
            </nav>
            {(!cartState) ? (<>Chưa có sản phẩm trong giỏ hàng</>):(<>
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
                    {cartState.map((cartItem) =>{
                        return (<tr key={cartItem.masp}>
                            <CartItem masp={cartItem.masp} />
                        </tr>)
                    })}
                    <tr>
                        <td colSpan="3">Tổng tiền</td>
                        <td>{gia} VNĐ</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center'>
                <Link className='btn btn-primary' to='/checkout'>Thanh toán</Link>
            </div>
            </>)}
        </div>
    )
}

export default Cart