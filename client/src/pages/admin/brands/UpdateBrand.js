import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const UpdateBrand = () => {

  let navigate = useNavigate();
  let { math } = useParams();
  const [nameBrand ,setNameBrand] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/brands/${math}`).then((response) => {
      setNameBrand(response.data[0].tenth);
      console.log(response.data);
    });
  },[math]);

  const onSubmit = () => {
    axios.put("http://localhost:3001/brands/",{ math: math , nameBrand: nameBrand }).then(() => {
      navigate("/admin/brands", {replace:true});
    });
  };

  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <div className="form">
        <h1 className="h3 mb-3 fw-normal">Sửa thương hiệu</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="math" value={math} readOnly/>
            <label htmlFor="math">Mã thương hiệu</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" onChange={((e) =>{setNameBrand(e.target.value)})} value={nameBrand} />
            <label htmlFor="tenth">Tên thương hiệu</label>
        </div>
      
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" onClick={onSubmit}>Sửa</button>
      </div>
      <Link className="w-100 btn btn-lg btn-outline-primary mb-3" to='/admin/brands' >Thoát</Link>
    </div>
  )
}

export default UpdateBrand