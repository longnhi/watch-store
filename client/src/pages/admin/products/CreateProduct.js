import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BrandSelected from '../../../components/selected/BrandSelected'
import CategorySelected from '../../../components/selected/CategorySelected'
import {API} from '../../../config/API';

const CreateProduct = () => {

  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [tensp,setTensp] = useState("")
  const [gia,setGia] = useState(0)
  const [xuatxu,setXuatxu] = useState("")
  const [baohanh,setBaohanh] = useState("")
  const [soluong,setSoluong] = useState(0)
  const [mota,setMota] = useState("")
  const [gioitinh,setGioitinh] = useState(1);
  const [math,setMath] = useState();
  const [maloai,setMaloai] = useState();

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }
    setSelectedFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(); 
    formData.append('file', selectedFile);
    formData.append('tensp', tensp);
    formData.append('gia', gia);
    formData.append('xuatxu', xuatxu);
    formData.append('baohanh', baohanh);
    formData.append('soluong', soluong);
    formData.append('mota', mota);
    formData.append('gioitinh', gioitinh);
    formData.append('math', math);
    formData.append('maloai', maloai);
    axios.post(`${API}product`, formData , {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
        'content-type': 'multipart/form-data'
      },
    }).then((response) => {
      
    });
    navigate("/admin/products", {replace:true});
  };

  return (
    <div className="container text-center my-3">
      <form onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="card">
          <div className='card-header'>
            <h1 className="h3 mb-3 fw-normal">Thêm sản phẩm</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form mb-3">
                  <label className="mb-3" htmlFor="hinhanh">Hình ảnh</label>
                  <input type="file" required accept="image/*" onChange={onSelectFile} className="form-control" id="hinhanh" placeholder="Chọn hình ảnh" />
                  {selectedFile &&  <img src={preview}  className="img-thumbnail mt-3 mb-3" alt="..." /> }
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tensp" required placeholder="Nhập tên sản phẩm" onChange={(e)=>{setTensp(e.target.value)}} value={tensp} />
                    <label htmlFor="tensp">Tên sản phẩm</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="gia" required placeholder="Nhập giá" onChange={(e)=>{setGia(e.target.value)}} value={gia} />
                    <label htmlFor="gia">Giá</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="xuatxu" required placeholder="Nhập xuất xứ" onChange={(e)=>{setXuatxu(e.target.value)}} value={xuatxu} />
                    <label htmlFor="xuatxu">Xuất xứ</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="baohanh" required placeholder="Nhập bảo hành" onChange={(e)=>{setBaohanh(e.target.value)}} value={baohanh} />
                    <label htmlFor="baohanh">Bảo hành</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="soluong" required placeholder="Nhập số lượng" onChange={(e)=>{setSoluong(e.target.value)}} value={soluong} />
                    <label htmlFor="soluong">Số lượng</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" className="form-control" id="mota" required placeholder="Nhập mô tả" rows={4} cols={50} style={{height:'100px'}} onChange={(e)=>{setMota(e.target.value)}} value={mota} />
                    <label htmlFor="mota">Mô tả</label>
                </div>
                <div className="row mb-3">
                  <div className="col-3 text-start">
                    <label>Giới tính</label>
                  </div>
                  <div className="col-9 text-start">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="nam" defaultValue="1" defaultChecked={gioitinh === 1} onChange={(event) => { setGioitinh(event.target.value) }}/>
                      <label className="form-check-label" htmlFor="nam">Nam</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="nu" defaultValue="0" defaultChecked={gioitinh === 0} onChange={(event) => { setGioitinh(event.target.value) }}/>
                      <label className="form-check-label" htmlFor="nu">Nữ</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 text-start">
                    <label>Thương hiệu</label>
                  </div>
                  <div className="col-9">
                    <BrandSelected math={math} setMath={setMath}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 text-start">
                    <label>Loại</label>
                  </div>
                  <div className="col-9">
                    <CategorySelected maloai={maloai} setMaloai={setMaloai} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <div className="d-flex justify-content-center">
            <div className="row g-2">
              <div className="col-6">
                <button className="btn btn-lg btn-outline-primary" type="submit">Thêm</button>
              </div>
              <div className="col-6">
                <Link className="btn btn-lg btn-outline-primary" to='/admin/products' >Thoát</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct