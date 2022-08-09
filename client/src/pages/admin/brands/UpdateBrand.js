import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {API} from '../../../config/API'

const UpdateBrand = () => {

  let navigate = useNavigate();
  let { math } = useParams();
  const [nameBrand ,setNameBrand] = useState("");

  useEffect(() => {
    axios.get(`${API}brands/${math}`).then((response) => {
      setNameBrand(response.data[0].tenth);
    });
  },[math]);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`${API}brands/`,{ math: math , nameBrand: nameBrand },{
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
        <form onSubmit={onSubmit} className="form">
          <h1 className="h3 mb-3 fw-normal">Sửa thương hiệu</h1>
          <div className="form-floating mb-3">
              <input type="text" className="form-control" id="math" value={math} readOnly/>
              <label htmlFor="math">Mã thương hiệu</label>
          </div>
          <div className="form-floating mb-3">
              <input type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" onChange={((e) =>{setNameBrand(e.target.value)})} value={nameBrand} />
              <label htmlFor="tenth">Tên thương hiệu</label>
          </div>
        
          <button 
            className="w-100 btn btn-lg btn-outline-primary mb-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Sửa
          </button>
        </form>
      </div>
      {/*Model*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Xác nhận
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Bạn có muốn sửa thương hiệu này không</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button type="button" onClick={onSubmit} className="btn btn-primary" data-bs-dismiss="modal">
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateBrand