import React from 'react'
import HeaderAdmin from '../../../components/header/HeaderAdmin'
import Sidebar from '../../../components/sidebar/Sidebar'
import MainAdmin from './MainAdmin'

function HomeAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainAdmin />
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin