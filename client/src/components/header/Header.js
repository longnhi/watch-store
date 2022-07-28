import React from 'react'
import {Link} from 'react-router-dom';
import Account from '../account/Account';
import Gia from '../dropdowns/Gia';
import Loai from '../dropdowns/Loai';
import ThuongHieu from '../dropdowns/ThuongHieu';
import Search from '../search/Search';

const Header = () =>  {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-expand-lg" aria-label="Eighth navbar example">
                <div className="container">
                    <Link className="navbar-brand text-center" to="/"><img src={process.env.PUBLIC_URL + '/logo.jpg'} style={{width: "40px"}} alt="WATCH STORE"/><h5>WATCH STORE</h5></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse show" id="navbarsExample07" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">ĐỒNG HỒ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" aria-current="page" to="/" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">THƯƠNG HIỆU</Link>
                                <ThuongHieu />
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">LOẠI</Link>
                                <Loai />
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="/" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">GIÁ</Link>
                                <Gia />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" hidden to="/">BẢO HÀNH</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <Search />
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active position-relative" aria-current="page" to="/cart"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
                                <span hidden className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
                                    0
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                &ensp;Giỏ hàng</Link>
                            </li>
                            <Account />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header