import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams} from 'react-router-dom'

const ProductDetailAdmin = () => {
    let { masp } = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${masp}`).then((res) => { 
            setProduct(res.data[0]);
        });
    },[masp]);

    return (
        <div className="row g-0 bg-light position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
            <img src={process.env.PUBLIC_URL + product.hinhanh} className="w-100" alt="..." />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
                <div className="card" style={{height: '100%'}}>
                    <div className="card-header text-center">
                        {product.tensp}
                    </div>
                    <div className="card-body">
                    <p className="card-title">Thương hiệu: {product.tenth}</p>
                    <p className="card-title">Loại: {product.tenloai}</p>
                    <p className="card-text">Giá: {product.gia}</p>
                    <p className="card-text">Xuất xứ: {product.xuatxu}</p>
                    <p className="card-text">Giới tính: {product.gioitinh===1 ? "Nam": "Nữ"}</p>
                    <p className="card-text">Bảo hành: {product.baohanh}</p>
                    <p className="card-text">Mô tả: {product.mota}</p>
                    
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-center">
                        <Link to="/admin/products" className="btn btn-outline-primary">THOÁT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailAdmin