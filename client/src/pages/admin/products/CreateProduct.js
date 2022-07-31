import React from 'react'
import {Link} from 'react-router-dom'
import BrandSelected from '../../../components/selected/BrandSelected'
import CategorySelected from '../../../components/selected/CategorySelected'

const CreateProduct = () => {
  return (
    <div className="container text-center my-3">
      <form >
        <div className="card">
          <div className='card-header'>
            <h1 className="h3 mb-3 fw-normal">Thêm sản phẩm</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form mb-3">
                  <label className="mb-3" htmlFor="hinhanh">Hình ảnh</label>
                  <input type="file" className="form-control" id="hinhanh" placeholder="Chọn hình ảnh" />
                </div>
                
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tensp" placeholder="Nhập tên sản phẩm" />
                    <label htmlFor="tensp">Tên sản phẩm</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="gia" placeholder="Nhập giá" />
                    <label htmlFor="gia">Giá</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="xuatxu" placeholder="Nhập xuất xứ" />
                    <label htmlFor="xuatxu">Xuất xứ</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="baohanh" placeholder="Nhập bảo hành" />
                    <label htmlFor="baohanh">Bảo hành</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="soluong" placeholder="Nhập số lượng" />
                    <label htmlFor="soluong">Số lượng</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" className="form-control" id="mota" placeholder="Nhập mô tả" />
                    <label htmlFor="mota">Mô tả</label>
                </div>
                <div className="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="nam" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-primary" htmlFor="nam">Nam</label>
                  <input type="radio" className="btn-check" name="btnradio" id="nu" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="nu">Nữ</label>
                </div>
                <div className="row">
                  <div className="col-3 text-start">
                    <label>Thương hiệu</label>
                  </div>
                  <div className="col-9">
                    <BrandSelected />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 text-start">
                    <label>Loại</label>
                  </div>
                  <div className="col-9">
                    <CategorySelected />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <div className="d-flex justify-content-center">
            <div className="row g-2">
              <div className="col-6">
                <button className="btn btn-lg btn-outline-primary" type="submit">Thêm</button>
              </div>
              <div className="col-6">
                <Link className="btn btn-lg btn-outline-primary" to='/admin/products' >Thoát</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        
      </form>
      
    </div>
  )
}

export default CreateProduct