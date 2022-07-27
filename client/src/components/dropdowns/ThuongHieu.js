import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const ThuongHieu = () => {

    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/brands`).then((res) => { 
            setListBrand(res.data);
        });
    },[]);

    return (
        <ul className="dropdown-menu" aria-labelledby="dropdown06">
            { listBrand.map((item)=>{
                return (
                    <li key={item.math}><Link className="dropdown-item" to={`/products/brand/${item.math}`}>{item.tenth.toUpperCase()}</Link></li>
                )
            })}
        </ul>
    )
}

export default ThuongHieu