import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import ProductList from '../../components/product/ProductList';
import {API} from '../../config/API';

const ProductsHome = () => {

    const [listNewProduct, setListNewProduct] = useState([]);

    useEffect(() => {
        axios.get(`${API}productsnew`).then((res) => { 
        setListNewProduct(res.data);
    });
    },[]);

    return (
        <div className="container my-4">
            <h4 className="text-center">Sản phẩm mới</h4>
            <>
            <ProductList listProduct={listNewProduct} />
            </>
            <div className="text-center my-3">
                <Link className="btn btn-outline-primary" to='/products'>Xem thêm</Link>
            </div>
        </div>
    )
}

export default ProductsHome