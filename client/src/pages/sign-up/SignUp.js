import React, {  useState } from "react";
import Axios from "axios";
import './signup.css'
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hoten, setHoten] = useState("");
    const [sodienthoai, setSoDienThoai] = useState("");
    const [checkEmailExist, setCheckEmailExist] = useState(false);

    const register = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/register", {
            email: email,
            password: password,
            hoten: hoten,
            sodienthoai: sodienthoai,
        }).then((res) => {
            if(res.data.statusCode === 1){
                setCheckEmailExist(true);
            }else if(res.data.statusCode === 2){
                setCheckEmailExist(false);
                navigate("/login",{ replace: true });
            }
        }).catch((e) => {
            console.log(e);
        });
        //
    };

    return (
        <main className="form-signup w-100 m-auto text-center">
            <form onSubmit={register}>
                <img className="mb-4" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="" width={72} height={57} />
                <h1 className="h3 mb-3 fw-normal">Đăng ký</h1>
                {checkEmailExist && (
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Email đã tồn tại</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {setCheckEmailExist(false);}}></button>
                    </div>
                )}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required id="fullname" placeholder="Họ tên" onChange={((e) =>{setHoten(e.target.value)})} value={hoten} />
                    <label htmlFor="fullname">Họ tên</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required id="phone" placeholder="Số điện thoại" onChange={((e) =>{setSoDienThoai(e.target.value)})} value={sodienthoai} />
                    <label htmlFor="phone">Số điện thoại</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" required id="email" placeholder="name@example.com" onChange={((e) =>{setEmail(e.target.value)})} value={email} />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" requiredid="password" placeholder="Password" onChange={((e) =>{setPassword(e.target.value)})} value={password} />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-primary mb-3">Đăng ký</button>
                
            </form>
            <button className="w-100 btn btn-lg btn-outline-primary" onClick={()=>{navigate("/", { replace: true });}}>Quay lại</button>
        </main>
    )
}

export default SignUp