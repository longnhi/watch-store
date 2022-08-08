import React, {useState,useEffect} from 'react'
import axios from 'axios';

const BrandSelected = (props) => {

    let math = props.math;
    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/brands`).then((res) => { 
            setListBrand(res.data);
            props.setMath(res.data[0].math);
        });
    },[]);

    return (
        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example" value={math} onChange={(e)=>{props.setMath(e.target.value)}}>
            {listBrand.map((brand) =>{
                return ( 
                    <option key={brand.math} value={brand.math} defaultChecked={brand.math===math} >{brand.tenth}</option> 
                )
            })}
        </select>
    )
}

export default BrandSelected