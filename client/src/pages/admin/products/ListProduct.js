import React, {useEffect, useState} from 'react'
import axios from 'axios';

function ListProduct() {

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/products`).then((res) => { 
      setListProduct(res.data);
  });
  },[]);

  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <a href='/admin/products/add' className="btn btn-outline-secondary">
            Thêm sản phẩm
          </a>
        </div>
      </div>
      <h2>Sản phẩm</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center align-middle">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Xuất xứ</th>
              <th scope="col">Giới tính</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((product) => {
              return (
                <tr key={product.masp}>
                  <td><img src={process.env.PUBLIC_URL + product.hinhanh} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
                  <td>{product.tensp}</td>
                  <td>{product.gia} VNĐ</td>
                  <td>{product.xuatxu}</td>
                  <td>{product.gioitinh === 1 ? "Nam" : "Nữ"}</td>
                  <td><a className="btn" href={`/admin/products/edit/${product.masp}`}><i className="fa fa-pencil"  /></a></td>
                  <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct