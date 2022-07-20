import React from 'react'
import './signup.css'
import { useNavigate } from "react-router-dom";

function SignUp() {

    let navigate = useNavigate();

    return (
        <main className="form-signup w-100 m-auto text-center">
            <form>
                <img className="mb-4" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="" width={72} height={57} />
                <h1 className="h3 mb-3 fw-normal">Đăng ký</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fullname" placeholder="Họ tên" />
                    <label htmlFor="fullname">Họ tên</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" />
                    <label htmlFor="phone">Số điện thoại</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="refloatingPassword" placeholder="Password" />
                    <label htmlFor="refloatingPassword">Nhập lại password</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Đăng ký</button>
                
            </form>
            <button className="w-100 btn btn-lg btn-outline-primary" onClick={()=>{navigate("/", { replace: true });}}>Quay lại</button>
            <p className="mt-5 mb-3 text-muted">© 2018–2022</p>
        </main>
    )
}

export default SignUp