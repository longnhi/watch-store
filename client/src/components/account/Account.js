import React, {useContext,} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Account = () => {
    let navigate = useNavigate();
    const { authState, setAuthState } = useContext(AuthContext);
    const logout = () => {
        sessionStorage.removeItem("accessToken");
        setAuthState({ email: "", role: "", status: 0 , isLogin: false });
        navigate('/login', {replace: true});
        window.location.reload();
    };
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link active dropdown-toggle" to="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user fa-lg" aria-hidden="true"/>&ensp;Tài khoản</Link>
            <ul className="dropdown-menu" aria-labelledby="dropdown07">
            {!authState.isLogin && (
                <>
                    <li><Link className="dropdown-item" to="/login">Đăng nhập</Link></li>
                    <li><Link className="dropdown-item" to="/registry">Đăng ký</Link></li>
                </>
            )} 
            {authState.isLogin && (
                <>
                    <li><Link className="dropdown-item" to="/order">Đơn hàng</Link></li>
                    <li><Link className="dropdown-item" to="/favorite">Yêu thích</Link></li>
                    <li><a className="dropdown-item" onClick={logout}>Đăng xuất</a></li>
                </>
            )}
            </ul>
        </li>
    )
}

export default Account