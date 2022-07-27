import React from 'react'
import {Link} from 'react-router-dom'

const CreateProduct = () => {
  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <form >
        <h1 className="h3 mb-3 fw-normal">Thêm sản phẩm</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên sản phẩm" />
            <label htmlFor="tenth">Tên sản phẩm</label>
        </div>
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id="tenth" placeholder="Nhập giá" />
            <label htmlFor="tenth">Giá</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập xuất xứ" />
            <label htmlFor="tenth">Xuất xứ</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập bảo hành" />
            <label htmlFor="tenth">Bảo hành</label>
        </div>
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id="tenth" placeholder="Nhập số lượng" />
            <label htmlFor="tenth">Số lượng</label>
        </div>
        <div className="form-floating mb-3">
            <textarea type="text" className="form-control" id="tenth" placeholder="Nhập mô tả" />
            <label htmlFor="tenth">Mô tả</label>
        </div>
        <div className="form-floating mb-3">
            <input type="file" className="form-control" id="tenth" placeholder="Chọn hình ảnh" />
            <label htmlFor="tenth">Hình ảnh</label>
        </div>
        <div className="btn-group  mb-3" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">Nam</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">Nữ</label>
        </div>

        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          <option selected>Chọn thương hiệu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          <option selected>Chọn loại sản phẩm</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Thêm</button>
      </form>
      <Link className="w-100 btn btn-lg btn-outline-primary mb-3" to='/admin/products' >Thoát</Link>
    </div>
  )
}

export default CreateProduct