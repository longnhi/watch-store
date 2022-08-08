import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../../config/API'

const CreateBrand = () => {

  let navigate = useNavigate();
  const [nameBrand, setNameBrand] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}brands/`,{ nameBrand: nameBrand },{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      navigate("/admin/brands", {replace:true});
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý thương hiệu</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link className="w-100 btn btn-lg btn-outline-primary mb-3" to='/admin/brands' >Thoát</Link>
        </div>
      </div>
      <div className="container text-center my-3" style={{maxWidth: "500px"}}>
        <form className="form" onSubmit={onSubmit} >
          <h1 className="h3 mb-3 fw-normal">Thêm thương hiệu</h1>
          <div className="form-floating mb-3">
              <input required type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" onChange={((e) =>{setNameBrand(e.target.value)})} value={nameBrand}/>
              <label htmlFor="tenth">Tên thương hiệu</label>
          </div>
          <div className="d-flex justify-content-center">
            <button className="w-100 btn btn-lg btn-outline-primary mb-3">Thêm</button>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default CreateBrand