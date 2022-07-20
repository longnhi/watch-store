import axios from 'axios';
import React, { useState, useEffect} from 'react'

function ThuongHieu() {

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
                    <li key={item.math}><a className="dropdown-item" href={`/products/brand/${item.math}`}>{item.tenth.toUpperCase()}</a></li>
                )
            })}
        </ul>
    )
}

export default ThuongHieu