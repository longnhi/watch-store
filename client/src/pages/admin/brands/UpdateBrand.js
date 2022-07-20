import React from 'react'

function UpdateBrand() {
  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <form >
        <h1 className="h3 mb-3 fw-normal">Sửa thương hiệu</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="math" value={1} readOnly/>
            <label htmlFor="math">Mã thương hiệu</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" value={"Casio"} />
            <label htmlFor="tenth">Tên thương hiệu</label>
        </div>
      
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" type="submit">Sửa</button>
      </form>
      <a className="w-100 btn btn-lg btn-outline-primary mb-3" href='/admin/brands' >Thoát</a>
    </div>
  )
}

export default UpdateBrand