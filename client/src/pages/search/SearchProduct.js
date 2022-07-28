import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import ProductList from '../../components/product/ProductList';

const SearchProduct = () => {

  let {name} = useParams();
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/byname/${name}`).then((res) => { 
        setListProduct(res.data);
    });
  },[name]);

  return (
    <div className="container my-4">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
              <li className="breadcrumb-item"><Link to="/">Tìm kiếm</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
        </nav>
        <div>
        { listProduct.length === 0 ? (<div className='text-center'>Không tìm thấy sản phẩm nào</div>) : 
          (
            <ProductList listProduct={listProduct} />
          )
        }
        </div>
    </div>
  )
}

export default SearchProduct