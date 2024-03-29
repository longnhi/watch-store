import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {API} from '../../../config/API'

const ListBrand = () => {

  const [listBrand, setListBrand] = useState([]);
  const [math, setMath] = useState("");

  useEffect(() => {
    axios.get(`${API}brands`).then((res) => { 
      setListBrand(res.data);
    });
  },[]);

  const deleteBrand = (math) => {
    axios.delete(`${API}brands/${math}`,{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if(!res.data.errCode){
        setListBrand(
          listBrand.filter((val) => {
            return val.math !== math;
          })
        );
      }
    });
  };
  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý thương hiệu</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to='/admin/brands/add' className="btn btn-outline-secondary">
            Thêm thương hiệu
          </Link>
        </div>
      </div>
      <h2>Thương hiệu</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tên thương hiệu</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listBrand.map((brand)=>{
              return (
                <tr key={brand.math}>
                  <td>{brand.math}</td>
                  <td>{brand.tenth}</td>
                  <td><Link className="btn" to={`/admin/brands/edit/${brand.math}`}><i className="fa fa-pencil"/></Link></td>
                  <td>
                    <button 
                      className="btn" 
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setMath(brand.math)}
                    >
                      <i className="fa fa-trash"/>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

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
            <div className="modal-body">Bạn có muốn xóa thương hiệu này không</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button type="button" onClick={()=>{deleteBrand(math)}} className="btn btn-primary" data-bs-dismiss="modal">
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListBrand