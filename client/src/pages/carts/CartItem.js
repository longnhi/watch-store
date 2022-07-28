import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const CartItem = (props) => {
    let masp = props.masp;
    const [product,setProduct] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${masp}`).then((res) => { 
            if (res.data.length === 0){
                navigate(`NOT_FOUND`);
            }  else {
                setProduct(res.data[0]);
            }
        });
    },[masp,navigate]);

    return (
        <>
            <td><img src={process.env.PUBLIC_URL + product.hinhanh} style={{width: "100px"}} className="card-img-top" alt="..." /></td>
            <td>{product.tensp}</td>
            <td><input type="number"  style={{width: "40px"}} defaultValue="1"></input></td>
            <td>{product.gia} VNĐ</td>
            <td><Link className='btn btn-outline-success' to=''><i className="fa fa-trash"></i></Link></td>
        </>
    )
}

export default CartItem