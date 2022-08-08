import React, {useState,useEffect} from 'react'
import axios from 'axios';

const CategorySelected = (props) => {

  let maloai = props.maloai;
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:3001/categorys`).then((res) => { 
          setListCategory(res.data);
          props.setMaloai(res.data[0].maloai);
      });
  },[]);

  return (
    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example" value = {maloai} onChange={(e)=>{props.setMaloai(e.target.value)}}>
      {listCategory.map((category) => {
        return (
          <option key={category.maloai} value={category.maloai} defaultChecked={category.maloai===maloai}>{category.tenloai}</option>
        )
      })}
    </select>
  )
}

export default CategorySelected