import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import ProductList from '../../components/product/ProductList';
import {API} from '../../config/API';


const ProductByBrand = () => {

    let {math} = useParams();
    const [brand,setBrand] = useState({});
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        axios.get(`${API}brands/${math}`).then((res) => {
            setBrand(res.data[0]);
        });
        axios.get(`${API}products/brand/${math}`).then((res) => { 
            setListProduct(res.data);
        });
    },[math]);

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{brand.tenth}</li>
                </ol>
            </nav>
            <>
                { listProduct.length === 0 ? (<div className='text-center'>Không tìm thấy sản phẩm nào</div>) : 
                (
                    <ProductList listProduct={listProduct} />
                )}
            </>
        </div>
    )
}

export default ProductByBrand