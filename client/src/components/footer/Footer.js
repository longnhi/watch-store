import React from 'react'

function Footer() {
  return (
    <footer className="py-3 my-4 border-top">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-6 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">Nguyễn Nhị Long © 2022 Đại học Công nghệ Sài Gòn, Inc</span>
          </div>
          <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/ACMilan"><i className="fa fa-facebook-official"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/acmilan/"><i className="fa fa-instagram"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://twitter.com/acmilan"><i className="fa fa-twitter"/></a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer