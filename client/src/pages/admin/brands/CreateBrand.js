import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateBrand = () => {

  let navigate = useNavigate();
  const [nameBrand, setNameBrand] = useState("");

  const onSubmit = () => {
    axios.post("http://localhost:3001/brands/",{ nameBrand: nameBrand }).then(() => {
      navigate("/admin/brands", {replace:true});
    });
  };

  return (
    <div className="container text-center my-3" style={{maxWidth: "500px"}}>
      <div className="form" >
        <h1 className="h3 mb-3 fw-normal">Thêm thương hiệu</h1>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tenth" placeholder="Nhập tên thương hiệu" onChange={((e) =>{setNameBrand(e.target.value)})} value={nameBrand}/>
            <label htmlFor="tenth">Tên thương hiệu</label>
        </div>
        <button className="w-100 btn btn-lg btn-outline-primary mb-3" onClick={onSubmit}>Thêm</button>
      </div>
      <Link className="w-100 btn btn-lg btn-outline-primary mb-3" to='/admin/brands' >Thoát</Link>
    </div>
  )
}

export default CreateBrand