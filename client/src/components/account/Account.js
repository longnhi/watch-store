import React from 'react'
import {Link} from 'react-router-dom';

const Account = () => {
    const isLogin = false; 
    const isAdmin = false;
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link active dropdown-toggle" to="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user fa-lg" aria-hidden="true"/>&ensp;Tài khoản</Link>
            <ul className="dropdown-menu" aria-labelledby="dropdown07">
            {!isLogin && (
                <>
                    <li><Link className="dropdown-item" to="/login">Đăng nhập</Link></li>
                    <li><Link className="dropdown-item" to="/registry">Đăng ký</Link></li>
                </>
            )} 
            {isLogin && (
                <>
                    {isAdmin && (<li><Link className="dropdown-item" to="/">Admin</Link></li>)}
                    <li><Link className="dropdown-item" to="/order">Đơn hàng</Link></li>
                    <li><Link className="dropdown-item" to="/favorite">Yêu thích</Link></li>
                    <li><Link className="dropdown-item" to="/">Đăng xuất</Link></li>
                </>
            )}
            </ul>
        </li>
    )
}

export default Account