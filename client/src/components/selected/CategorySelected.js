import React, {useState,useEffect} from 'react'
import axios from 'axios';

const CategorySelected = () => {

  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:3001/categorys`).then((res) => { 
          setListCategory(res.data);
      });
  },[]);

  return (
    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
      {listCategory.map((category) => {
        return (
          <option key={category.maloai} value={category.maloai}>{category.tenloai}</option>
        )
      })}
    </select>
  )
}

export default CategorySelected