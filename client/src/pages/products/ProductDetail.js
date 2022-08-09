import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import ButtonFavorite from '../../components/favorite/ButtonFavorite';
import {API} from '../../config/API';


const ProductDetail = () => {
    let { masp } = useParams();
    const [product,setProduct] = useState({});
    const [textFavorite,setTextFavorite] = useState("YÊU THÍCH");
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}products/${masp}`).then((res) => { 
            if (res.data.length === 0){
                navigate(`NOT_FOUND`);
            }  else {
                setProduct(res.data[0]);
            }
        });
    },[masp,navigate]);
    
    const addToCart = () => {
        let cart = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : [];
        let cartItem = cart.find(item => item.product.masp === parseInt(masp));
        if(cartItem){
            cartItem.soluong+=1;
        }else{
            cart.push({product: product, soluong: 1});
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/cart',{replace: true});
        window.location.reload();
    };

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.tensp}</li>
                </ol>
            </nav>
            <div className="row g-0 bg-light position-relative">
                <div className="col-md-6 mb-md-0 p-md-4">
                <img src={process.env.PUBLIC_URL + "/assets/img/products/" + product.hinhanh} className="w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4 ps-md-0">
                    <div className="card" style={{height: '100%'}}>
                        <div className="card-header text-center">
                            {product.tensp}
                        </div>
                        <div className="card-body">
                        <p className="card-title">Thương hiệu: <Link to={`/products/brand/${product.math}`} className="text-decoration-none">{product.tenth}</Link></p>
                        <p className="card-title">Loại: <Link to={`/products/category/${product.maloai}`} className="text-decoration-none">{product.tenloai}</Link></p>
                        <p className="card-text">Giá: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia)}</p>
                        <p className="card-text">Xuất xứ: {product.xuatxu}</p>
                        <p className="card-text">Giới tính: {product.gioitinh===1 ? "Nam": "Nữ"}</p>
                        <p className="card-text">Bảo hành: {product.baohanh}</p>
                        <p className="card-text">Mô tả: {product.mota}</p>
                        {product.soluong === 0 ? <p className="card-text text-danger">Sản phẩm đang hết hàng</p> : <p className="card-text">Số lượng:  {product.soluong}</p>}
                        {product.trangthai === 0 && <p className="card-text text-danger">Sản phẩm không còn kinh doanh tại cửa hàng</p>}
                        </div>
                        <div className="card-footer text-muted d-flex justify-content-center">
                        {product.trangthai===0 || product.soluong === 0 ? (
                            <button className="card-link btn btn-light link-dark disabled">
                                <i className="fa fa-cart-plus fa-2x"/>&ensp;GIỎ HÀNG
                            </button>
                        ):(
                            <button onClick={() => {addToCart()}} className="card-link btn link-dark"><i className="fa fa-cart-plus fa-2x"/>&ensp;GIỎ HÀNG</button>
                        )}
                            <ButtonFavorite masp={masp} textFavorite={textFavorite} setTextFavorite={setTextFavorite} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail