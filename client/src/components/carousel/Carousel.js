import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + "./assets/img/banner/img-banner-1.jpg" } className="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "./assets/img/banner/img-banner-2.jpg" } className="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "./assets/img/banner/img-banner-3.jpg" } className="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        {/*<div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + "./img/banner/img-banner-1.jpg" } alt='' />
            <div className="container">
            <div className="carousel-caption text-left">
                <h1>Đồng hồ Nhật Bản</h1>
            </div>
            </div>
        </div>
        <div className="carousel-item">
        <img src={process.env.PUBLIC_URL + "./img/banner/img-banner-2.jpg" } alt='' />
            <div className="container">
            <div className="carousel-caption">
                <h1>Đồng hồ Thụy Sĩ</h1>
            </div>
            </div>
        </div>
        <div className="carousel-item">
        <img src={process.env.PUBLIC_URL + "./img/banner/img-banner-3.jpg" } alt='' />
            <div className="container">
            <div className="carousel-caption text-right">
                <h1>Đồng hồ cao cấp</h1>
            </div>
            </div>
        </div>
        </div>
        <button className="carousel-control-prev btn-link" type="button" data-target="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next btn-link" type="button" data-target="#myCarousel" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
        </button>
  </div>*/}
    </div>
    
  )
}

export default Carousel