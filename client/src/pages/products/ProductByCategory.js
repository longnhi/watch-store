import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import ProductList from '../../components/product/ProductList';

const ProductByCategory = () => {

    let {maloai} = useParams();
    const [category,setCategory] = useState({});
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/categorys/${maloai}`).then((res) => {
            setCategory(res.data[0]);
        });
        axios.get(`http://localhost:3001/products/category/${maloai}`).then((res) => { 
            setListProduct(res.data);
        });
    },[maloai]);

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{category.tenloai}</li>
                </ol>
            </nav>
            <>
            { listProduct.length === 0 ? (<div className='text-center'>Không tìm thấy sản phẩm nào</div>) : 
                (
                    <ProductList listProduct={listProduct} />
                )
            }
            </>
        </div>
    )
}

export default ProductByCategory