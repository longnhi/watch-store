import axios from 'axios';
import React, { useState, useEffect} from 'react'

function ListBrand() {

  const [listBrand, setListBrand] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/brands`).then((res) => { 
      setListBrand(res.data);
    });
  },[]);

  const deleteBrand = (math) => {
    axios.delete(`http://localhost:3001/brands/${math}`);
    window.location.reload();
  };

  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý thương hiệu</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <a href='/admin/brands/add' className="btn btn-outline-secondary">
            Thêm thương hiệu
          </a>
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
                  <td><a className="btn" href={`/admin/brands/edit/${brand.math}`}><i className="fa fa-pencil"/></a></td>
                  <td><a className="btn" onClick={()=>{deleteBrand(brand.math)}}><i className="fa fa-trash"/></a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBrand