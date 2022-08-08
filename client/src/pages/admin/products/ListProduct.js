import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {API} from '../../../config/API';

const ListProduct = () => {

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(`${API}products`).then((res) => { 
      setListProduct(res.data);
  });
  },[]);

  const deleteProduct = (masp) => {
    axios.delete(`${API}product/${masp}`,{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if(!res.data.errCode){
        setListProduct(
          listProduct.filter((val) => {
            return val.masp !== masp;
          })
        );
      }
    });
  };

  return (
    <div >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to='/admin/products/add' className="btn btn-outline-secondary">
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <h2>Sản phẩm</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center align-middle">
          <thead>
            <tr>
              <th scope="col">Mã sản phẩm</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Xuất xứ</th>
              <th scope="col">Giới tính</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...listProduct].reverse().map((product) => {
              return (
                <tr key={product.masp}>
                  <td>{product.masp}</td>
                  <td><img src={process.env.PUBLIC_URL + "/assets/img/products/" + product.hinhanh} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
                  <td>{product.tensp}</td>
                  <td>{product.gia} VNĐ</td>
                  <td>{product.xuatxu}</td>
                  <td>{product.gioitinh === 1 ? "Nam" : "Nữ"}</td>
                  <td><Link className="btn" to={`/admin/products/detail/${product.masp}`}><i className="fa fa-eye"  /></Link></td>
                  <td><Link className="btn" to={`/admin/products/edit/${product.masp}`}><i className="fa fa-pencil"  /></Link></td>
                  <td><button className="btn" onClick={()=>{deleteProduct(product.masp)}}><i className="fa fa-trash"/></button></td>
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