import React from 'react'

function Favorite() {
  return (
    <div className="container my-4 mb-5">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
            <li className="breadcrumb-item active" aria-current="page">Sản phẩm yêu thích</li>
            </ol>
        </nav>
        <div className="row">
        <div className="col-md-3 mb-2 mt-2">
          <div className="card" style={{width: '18rem'}}>
            <img src={process.env.PUBLIC_URL + '/assets/img/products/CASIO-AE-1200WHD-1AVDF-1.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center text-truncate">Casio AE-1200WHD-1AVDF</h5>
              <p className="card-text text-truncate">Casio AE-1200WHD-1AVDF đang có giá bán tại thị trường Việt Nam khoảng 1.020.240 ₫ 
              - 1.308.000 ₫, khi mua hàng tại WatchStore và đặt cọc trước 200.000đ thì giá sẽ tốt hơn, 
              đặc biệt khi chuyển khoản 100% thì giá chỉ còn 969.228 ₫. 
              Đây là mức giá hấp dẫn nhất nếu bạn muốn chi tiền để sở hữu chiếc Casio AE-1200WHD-1AVDF trong thời gian này.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Giá: 1.200.000 VNĐ</li>
            </ul>
            <div className="card-body d-flex justify-content-around">
              <a href="/" className="card-link link-dark"><i className="fa fa-cart-plus fa-2x"/></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-search fa-2x" /></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-heart fa-2x" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2 mt-2">
          <div className="card" style={{width: '18rem'}}>
            <img src={process.env.PUBLIC_URL + '/assets/img/products/CASIO-MTP-1374L-1AVDF-1.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center text-truncate">Casio MTP-1374L-1AVDF</h5>
              <p className="card-text text-truncate">Casio MTP-1374L-1AVDF đang có giá bán tại thị trường Việt Nam khoảng 1.020.240 ₫ 
              - 1.308.000 ₫. 
              Đây là mức giá hấp dẫn nhất nếu bạn muốn chi tiền để sở hữu chiếc Casio MTP-1374L-1AVDF trong thời gian này.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Giá: 1.200.000 VNĐ</li>
            </ul>
            <div className="card-body d-flex justify-content-around">
              <a href="/" className="card-link link-dark"><i className="fa fa-cart-plus fa-2x"/></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-search fa-2x" /></a>
              <a href="/" className="card-link link-dark"><i className="fa fa-heart fa-2x" /></a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Favorite