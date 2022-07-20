import React from 'react'

function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{minHeight: "750px"}}>
            <div className="position-sticky pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Admin</span>
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item mt-1 mb-1">
                        <a className="nav-link" href="/admin">
                        <i className="fa fa-home fa-lg" aria-hidden="true" />
                            &ensp;Dashboard
                        </a>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <a className="nav-link active" aria-current="page" href="/admin/brands">
                        <i className="fa fa-list fa-lg"  />&ensp;Quản lý thương hiệu
                        </a>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                        <a className="nav-link" href="/admin/products"><i className="fa fa-bars fa-lg"  />&ensp;Quản lý sản phẩm</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/admin/orders">
                            <i className="fa fa-cart-arrow-down fa-lg"  />&ensp;
                            Quản lý đơn hàng
                        </a>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                    <a className="nav-link" href="/admin/customers">
                    <i className="fa fa-users"  />&ensp;
                        Quản lý khách hàng
                    </a>
                    </li>
                    <li className="nav-item mt-1 mb-1">
                    <a className="nav-link" href="/admin/guarantees">
                    <i className="fa fa-sticky-note-o fa-lg"  />
                        &ensp;Quản lý bảo hành
                    </a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Sidebar