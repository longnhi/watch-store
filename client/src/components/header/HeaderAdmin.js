import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const HeaderAdmin = () => {
  
  let navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ email: "", role: "", status: 0 , isLogin: false });
    navigate('/login', {replace: true});
    window.location.reload();
  };

  return (
    <header className="navbar navbar-dark  bg-primary flex-md-nowrap p-2 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-center" to="/">WATCH STORE</Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button className="btn nav-link px-3" onClick={logout}>Sign out &ensp;<i className="fa fa-sign-out"/></button>
          </div>
        </div>
    </header>
  )
}

export default HeaderAdmin