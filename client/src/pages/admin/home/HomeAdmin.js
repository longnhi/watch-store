import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../../components/header/HeaderAdmin'
import Sidebar from '../../../components/sidebar/Sidebar'

function HomeAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin