import axios from 'axios';
import React, { useState, useEffect} from 'react'

function Loai() {

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
                    <li key={item.maloai}><a className="dropdown-item" href={`/products/category/${item.maloai}`}>{item.tenloai.toUpperCase()}</a></li>
                )
            })}
        </ul>
    )
}

export default Loai