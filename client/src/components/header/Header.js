import React from 'react'
import Account from '../account/Account';
import Loai from '../dropdowns/Loai';
import ThuongHieu from '../dropdowns/ThuongHieu';
import Search from '../search/Search';

function Header() {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-expand-lg" aria-label="Eighth navbar example">
                <div className="container">
                    <a className="navbar-brand text-center" href="/"><img src={process.env.PUBLIC_URL + '/logo.jpg'} style={{width: "40px"}} alt="WATCH STORE"/><h5>WATCH STORE</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse show" id="navbarsExample07" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/products">ĐỒNG HỒ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" aria-current="page" href="/" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">THƯƠNG HIỆU</a>
                                <ThuongHieu />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">NAM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">NỮ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">LOẠI</a>
                                <Loai />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">BẢO HÀNH</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Search />
                        </ul>
                        <Account />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header