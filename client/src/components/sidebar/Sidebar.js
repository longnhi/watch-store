import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{minHeight: "750px"}}>
            <div className="position-sticky pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Admin</span>
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item mt-1 mb-1">
                        <Link className="nav-link" to="/admin">
                        <i className="fa fa-home fa-lg" aria-hidden="true" />
                            &ensp;Dashboard
                        </Link>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <Link className="nav-link active" aria-current="page" to="/admin/brands">
                        <i className="fa fa-list fa-lg"  />&ensp;Quản lý thương hiệu
                        </Link>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <Link className="nav-link" to="/admin/products">
                            <i className="fa fa-bars fa-lg"  />&ensp;Quản lý sản phẩm
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/orders">
                            <i className="fa fa-cart-arrow-down fa-lg"  />&ensp;
                            Quản lý đơn hàng
                        </Link>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <Link className="nav-link" to="/admin/customers">
                        <i className="fa fa-users"  />&ensp;
                            Quản lý khách hàng
                        </Link>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <Link className="nav-link" to="/admin/guarantees">
                        <i className="fa fa-sticky-note-o fa-lg"  />
                            &ensp;Quản lý bảo hành
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Sidebar