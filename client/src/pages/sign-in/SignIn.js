import React from 'react'
import './signin.css'
import { useNavigate } from "react-router-dom";

function SignIn() {
    let navigate = useNavigate();

    return (
        <main className="form-signin w-100 m-auto text-center">
            <form>
                <img className="mb-4" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="" width={72} height={72} />
                <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Đăng nhập</button>
                
            </form>
            <button className="w-100 btn btn-lg btn-outline-primary" onClick={()=>{navigate("/", { replace: true });}}>Quay lại</button>
        </main>
    )
}

export default SignIn