import React from 'react'

function CreateBrand() {
  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <form >
        <h1 className="h3 mb-3 fw-normal">Thêm thương hiệu</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" />
            <label htmlFor="tenth">Tên thương hiệu</label>
        </div>
      
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Thêm</button>
      </form>
      <a className="w-100 btn btn-lg btn-outline-primary mb-3" href='/admin/brands' >Thoát</a>
    </div>
  )
}

export default CreateBrand