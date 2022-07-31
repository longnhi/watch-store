import React, {useState,useEffect} from 'react'
import axios from 'axios';

const BrandSelected = () => {

    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/brands`).then((res) => { 
            setListBrand(res.data);
        });
    },[]);

    return (
        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
            {listBrand.map((brand) =>{
                return (<option key={brand.math} value={brand.math}>{brand.tenth}</option>)
            })}
        </select>
    )
}

export default BrandSelected