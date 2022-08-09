import React, {useContext,  useState} from 'react'
import './signin.css'
import { useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {API} from '../../config/API';


const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkUserFail, setCheckUserFail] = useState(false);
    const [messages, setMessages] = useState("");

    const { authState } = useContext(AuthContext);

    if(authState.isLogin){
        return (<Navigate to="/" replace={true} />)
    }
    
    const login = (e) => {
        e.preventDefault();
        axios.post(`${API}login`, {
            email: email,
            password: password
        }).then((res) => {
            if(res.data.err){
                setCheckUserFail(true);
                if(res.data.err === 1){
                    setMessages("Email hoặc mật khẩu không chính xác");
                }else if(res.data.err === 2){
                    setMessages("Tài khoản của bạn đã bị khóa");
                }
            }else {
                localStorage.setItem("accessToken", res.data);
                navigate("/", { replace: true });
                window.location.reload();
            }
        }).catch((e) => {
            console.log(e);
        });
    };
    return (
        <>
        <main className="form-signin w-100 m-auto text-center">
            <form onSubmit={login}>
                <img className="mb-4" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="" width={72} height={72} />
                <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
                {checkUserFail && (
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{messages}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {setCheckUserFail(false);}}></button>
                    </div>
                )}
                <div className="form-floating">
                    <input type="email" required className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value);}} value={email}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" required className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPassword(e.target.value);}} value={password}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Đăng nhập</button>
                
            </form>
            <button className="w-100 btn btn-lg btn-outline-primary" onClick={()=>{navigate("/", { replace: true });}}>Quay lại</button>
        </main>
        </>
    )
}

export default SignIn