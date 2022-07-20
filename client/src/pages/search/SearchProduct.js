import React from 'react'

function SearchProduct() {
  return (
    <div className="container my-4">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
            <li className="breadcrumb-item"><a href="/">Tìm kiếm</a></li>
            <li className="breadcrumb-item active" aria-current="page">Orient</li>
            </ol>
        </nav>
        <div className="row">
        <div className="col-md-3 mb-2 mt-2">
          <div className="card" style={{width: '18rem'}}>
            <img src={process.env.PUBLIC_URL + '/assets/img/products/RA-AA0B02R19B-1.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center text-truncate">Orient SK RA-AA0B02R19B</h5>
              <p className="card-text text-truncate">Orient SK RA-AA0B02R19B đang có giá bán tại thị trường Việt Nam khoảng 1.020.240 ₫ 
              - 1.308.000 ₫. 
              Đây là mức giá hấp dẫn nhất nếu bạn muốn chi tiền để sở hữu chiếc Orient SK RA-AA0B02R19B trong thời gian này.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Giá: 1.200.000 VNĐ</li>
            </ul>
            <div className="card-body d-flex justify-content-around">
              <a href="/" className="card-link link-dark"><i className="fa fa-cart-plus fa-2x"/></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-search fa-2x" /></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-heart-o fa-2x" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2 mt-2">
          <div className="card" style={{width: '18rem'}}>
            <img src={process.env.PUBLIC_URL + '/assets/img/products/RA-AR0001S-1637211295120.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center text-truncate">Orient RA-AR0001S10B</h5>
              <p className="card-text text-truncate">Orient RA-AR0001S10B đang có giá bán tại thị trường Việt Nam khoảng 7.020.240 ₫ 
              - 8.308.000 ₫.
              Đây là mức giá hấp dẫn nhất nếu bạn muốn chi tiền để sở hữu chiếc Casio AE-1200WHD-1AVDF trong thời gian này.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Giá: 8.200.000 VNĐ</li>
            </ul>
            <div className="card-body d-flex justify-content-around">
              <a href="/" className="card-link link-dark"><i className="fa fa-cart-plus fa-2x"/></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-search fa-2x" /></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-heart-o fa-2x" /></a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SearchProduct