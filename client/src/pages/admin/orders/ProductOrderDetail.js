import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {API} from '../../../config/API';

const ProductOrderDetail = (props) => {

    let masp = props.masp;
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`${API}products/${masp}`).then((response) => {
            setProduct(response.data[0]);
        });
    },[masp]);

    return (
        <>
            <td>
                <img src={process.env.PUBLIC_URL + "/assets/img/products/" + product.hinhanh} style={{width: "100px"}} className="card-img-top" alt="..." />
            </td>
            <td>
                {product.tensp}
            </td>
        </>
    )
}

export default ProductOrderDetail