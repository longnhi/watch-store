import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams} from 'react-router-dom'

const UpdateProduct = () => {

  let { masp } = useParams();
  const [product,setProduct] = useState({});

  const [listBrand, setListBrand] = useState([]);

  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:3001/categorys`).then((res) => { 
          setListCategory(res.data);
      });
      axios.get(`http://localhost:3001/brands`).then((res) => { 
          setListBrand(res.data);
      });
      axios.get(`http://localhost:3001/products/${masp}`).then((res) => { 
          setProduct(res.data[0]);
      });
  },[masp]);

  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <form >
        <h1 className="h3 mb-3 fw-normal">Sửa sản phẩm</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên sản phẩm" value={product.masp} readOnly />
            <label htmlFor="tenth">Mã sản phẩm</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên sản phẩm" value={product.tensp} />
            <label htmlFor="tenth">Tên sản phẩm</label>
        </div>
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id="tenth" placeholder="Nhập giá" value={product.gia} />
            <label htmlFor="tenth">Giá</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập xuất xứ" value={product.xuatxu} />
            <label htmlFor="tenth">Xuất xứ</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập bảo hành" value={product.baohanh} />
            <label htmlFor="tenth">Bảo hành</label>
        </div>
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id="tenth" placeholder="Nhập số lượng" value={product.soluong} />
            <label htmlFor="tenth">Số lượng</label>
        </div>
        <div className="form-floating mb-3">
            <textarea type="text" className="form-control" id="tenth" placeholder="Nhập mô tả" value={product.mota}/>
            <label htmlFor="tenth">Mô tả</label>
        </div>
        <div className="form-floating mb-3">
            <input type="file" className="form-control" id="tenth" placeholder="Chọn hình ảnh" />
            <label htmlFor="tenth">Hình ảnh</label>
        </div>
        <div className="btn-group  mb-3" role="group" aria-label="Basic radio toggle button group">
          {product.gioitinh ===1 ? 
            <>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked  />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">Nam</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio2">Nữ</label>
            </>
           : 
          <>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Nam</label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked  />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Nữ</label>
          </>}
          
        </div>

        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          {listBrand.map((brand)=>{
            return( <option key={brand.math} value={brand.math} {...product.math===brand.math &&"selected"} >{brand.tenth}</option>) 
          })}
        </select>
        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          {listCategory.map((category)=>{
            return (<option key={category.maloai} value={category.maloai} {...product.maloai===category.maloai &&"selected"} >{category.tenloai}</option>)
          })}
        </select>
      
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Sửa</button>
      </form>
      <Link className="w-100 btn btn-lg btn-outline-primary mb-3" to='/admin/products' >Thoát</Link>
    </div>
  )
}

export default UpdateProduct