import React, {useContext, useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthContext'

const Main = () => {
  let navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if(authState.role==="admin"){
      navigate("/admin", {replace: true});
    }
  },[navigate,authState]);

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