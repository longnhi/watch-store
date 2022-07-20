import React from 'react'

function Contact() {
  return (
    <div className="card my-4" style={{backgroundImage: 'url(https://zenwatch.vn/uploads/store-zenwatch-img.jpg)',height: "500px"}}>
        <div className="container text-center text-light my-5"> 
            <div className="card-body my-5"> 
                <h1 className="">WATCHSTORE - NƠI AN TÂM MUA ĐỒNG HỒ CHÍNH HÃNG</h1> 
                <br />
                <div className=""> 
                    <h4>NHÀ PHÂN PHỐI CHÍNH HÃNG CÁC THƯƠNG HIỆU ĐỒNG HỒ</h4>
                    <p>Hotline: 0825316954</p><p> Email: nhilong0711@gmail.com</p>
                </div> 
                <a href="/lienhe" className="btn btn-outline-primary btn-border btn-round">Địa chỉ</a> 
            </div> 
        </div>
    </div>
  )
}

export default Contact