import React from 'react'

function ListProduct() {
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
            <tr>
              <td><img src={process.env.PUBLIC_URL + '/assets/img/products/CASIO-AE-1200WHD-1AVDF-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
              <td>CASIO AE-1200WHD-1AVDF</td>
              <td>1.200.000 VNĐ</td>
              <td>Nhật Bản</td>
              <td>Nam</td>
              <td><a className="btn" href='/admin/products/edit/1'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
            <tr>
              <td><img src={process.env.PUBLIC_URL + '/assets/img/products/RA-AA0B02R19B-1.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
              <td>Orient RA-AA0B02R19B</td>
              <td>1.200.000 VNĐ</td>
              <td>Thụy Sỹ</td>
              <td>Nữ</td>
              <td><a className="btn" href='/admin/products/edit/2'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
            <tr>
              <td><img src={process.env.PUBLIC_URL + '/assets/img/products/Citizen-BF2011-51E-1-1627461238909.jpg'} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
              <td>Citizen-BF2011-51E</td>
              <td>24.000.000 VNĐ</td>
              <td>Hoa Kỳ</td>
              <td>Nam</td>
              <td><a className="btn" href='/admin/products/edit/3'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct