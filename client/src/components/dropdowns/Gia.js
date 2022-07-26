import React from 'react'

function Gia() {
  return (
    <ul className="dropdown-menu" aria-labelledby="dropdown07">
        <li><a className="dropdown-item" href={`/products/price/0_1000000`}>Dưới 1.000.000.</a></li>
        <li><a className="dropdown-item" href={`/products/price/1000000_10000000`}>1.000.000-10.000.000.</a></li>
        <li><a className="dropdown-item" href={`/products/price/10000000_20000000`}>10.000.000-20.000.000.</a></li>
        <li><a className="dropdown-item" href={`/products/price/20000000_max`}>Trên 20.000.000.</a></li>
    </ul>
  )
}

export default Gia