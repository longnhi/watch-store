import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import ProductList from '../../components/product/ProductList';
import {API} from '../../config/API';


const ProductByPrice = () => {
    
    let {price} = useParams();
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        axios.get(`${API}products/price/${price}`).then((res) => { 
            setListProduct(res.data);
        });
    },[price]);

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
                    {(() => {
                        switch(price) {
                            case '0_1000000':
                                return <li className="breadcrumb-item active" aria-current="page">Dưới 1.000.000 VNĐ</li>
                            case '1000000_10000000':
                                return <li className="breadcrumb-item active" aria-current="page">Từ 1.000.000 - 10.000.000 VNĐ</li>
                            case '10000000_20000000':
                                return <li className="breadcrumb-item active" aria-current="page">Từ 10.000.000 - 20.000.000 VNĐ</li>
                            case '20000000_max':
                                return <li className="breadcrumb-item active" aria-current="page">Trên 20.000.000 VNĐ</li>
                            default:
                                return null
                            }
                    })()}
                    
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

export default ProductByPrice