import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function Main() {
  return (
    <>
        <Header />
        <div style={{minHeight:"600px"}}>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Main