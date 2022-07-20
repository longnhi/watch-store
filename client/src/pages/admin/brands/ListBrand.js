import React from 'react'

function ListBrand() {
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
            <tr>
              <td>1</td>
              <td>Casio</td>
              <td><a className="btn" href='/admin/brands/edit/1'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Orient</td>
              <td><a className="btn" href='/admin/brands/edit/2'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Citizen</td>
              <td><a className="btn" href='/admin/brands/edit/3'><i className="fa fa-pencil"  /></a></td>
              <td><a className="btn" href='/'><i className="fa fa-trash"  /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBrand