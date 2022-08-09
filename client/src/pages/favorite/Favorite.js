import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ProductList from '../../components/product/ProductList'
import {API} from '../../config/API';
import {AuthContext} from '../../context/AuthContext';

const Favorite = () => {
  const [listProduct, setListProduct] = useState([]);
  const { customerState } = useContext(AuthContext);

  useEffect(() => {
    if(customerState){
      axios.get(`${API}favoritelist/${customerState.makh}`,{
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }).then((res) => { 
        if(res.data.length > 0){
          setListProduct(res.data);
        }
        console.log(res.data);
      }); 
    }
  },[customerState]);

  return (
    <div className="container my-4 mb-5">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Sản phẩm yêu thích</li>
            </ol>
        </nav>
        <ProductList listProduct={listProduct} />
    </div>
  )
}

export default Favorite