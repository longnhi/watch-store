import React from 'react'

function Account() {
    const isLogin = false; 
    const isAdmin = false;
    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/cart"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>&ensp;Giỏ hàng</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-user fa-lg" aria-hidden="true"/>&ensp;Tài khoản</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown07">
                {!isLogin && (
                    <>
                        <li><a className="dropdown-item" href="/login">Đăng nhập</a></li>
                        <li><a className="dropdown-item" href="/registry">Đăng ký</a></li>
                    </>
                )} 
                {isLogin && (
                    <>
                        {isAdmin && (<li><a className="dropdown-item" href="/">Admin</a></li>)}
                        <li><a className="dropdown-item" href="/order">Đơn hàng</a></li>
                        <li><a className="dropdown-item" href="/favorite">Yêu thích</a></li>
                        <li><a className="dropdown-item" href="/">Đăng xuất</a></li>
                    </>
                )}
                </ul>
            </li>
        </ul>
    )
}

export default Account