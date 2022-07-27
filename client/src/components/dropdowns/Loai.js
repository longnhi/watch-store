import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const Loai = () => {

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/categorys`).then((res) => { 
            setListCategory(res.data);
        });
    },[]);

    return (
        <ul className="dropdown-menu" aria-labelledby="dropdown07">
            { listCategory.map((item)=>{
                return (
                    <li key={item.maloai}><Link className="dropdown-item" to={`/products/category/${item.maloai}`}>{item.tenloai.toUpperCase()}</Link></li>
                )
            })}
        </ul>
    )
}

export default Loai