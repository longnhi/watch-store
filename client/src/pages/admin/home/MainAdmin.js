import React, { useState, useEffect} from 'react'
import axios from 'axios'

function MainAdmin() {

  const [listBrand, setListBrand] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/brands').then((res) => {
      setListBrand(res.data);
    });

    axios.get('http://localhost:3001/categorys').then((res) => {
      setListCategory(res.data);
    });

    axios.get('http://localhost:3001/products').then((res) => {
      setListProduct(res.data);
    });

  },[])

  return (
    <div hidden>
      <h1>Thương hiệu:</h1>
      {listBrand.map((item) => {
        return (
          <p key={item.math}>{JSON.stringify(item)}</p>
        )
      })}
      <h1>Loại:</h1>
      {listCategory.map((item) => {
        return (
          <p key={item.maloai}>{JSON.stringify(item)}</p>
        )
      })}
      <h1>Sản phẩm:</h1>
      {listProduct.map((item) => {
        return (
          <p key={item.masp}>{JSON.stringify(item)}</p>
        )
      })}
    </div>
  )
}

export default MainAdmin