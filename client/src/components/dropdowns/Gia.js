import React from 'react'
import {Link} from 'react-router-dom'

const Gia = () => {
  return (
    <ul className="dropdown-menu" aria-labelledby="dropdown07">
        <li><Link className="dropdown-item" to={`/products/price/0_1000000`}>Dưới 1.000.000.</Link></li>
        <li><Link className="dropdown-item" to={`/products/price/1000000_10000000`}>1.000.000-10.000.000.</Link></li>
        <li><Link className="dropdown-item" to={`/products/price/10000000_20000000`}>10.000.000-20.000.000.</Link></li>
        <li><Link className="dropdown-item" to={`/products/price/20000000_max`}>Trên 20.000.000.</Link></li>
    </ul>
  )
}

export default Gia