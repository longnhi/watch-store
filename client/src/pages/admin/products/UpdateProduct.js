import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import BrandSelected from '../../../components/selected/BrandSelected'
import CategorySelected from '../../../components/selected/CategorySelected'
import {API} from '../../../config/API';

const UpdateProduct = () => {

  let { masp } = useParams();
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
  const [trangthai,setTrangthai] = useState(1);
  const [math,setMath] = useState();
  const [maloai,setMaloai] = useState();
  const [hinhanh,setHinhanh] = useState("");

  useEffect(() => {
    axios.get(`${API}products/${masp}`).then((res) => { 
      setTensp(res.data[0].tensp);
      setGia(res.data[0].gia);
      setXuatxu(res.data[0].xuatxu);
      setBaohanh(res.data[0].baohanh);
      setSoluong(res.data[0].soluong);
      setMota(res.data[0].mota);
      setGioitinh(res.data[0].gioitinh);
      setTrangthai(res.data[0].trangthai);
      setMath(res.data[0].math);
      setMaloai(res.data[0].maloai);
      setHinhanh(res.data[0].hinhanh); 
    });
  },[masp]);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(selectedFile){
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
      console.log(trangthai);
      axios.put(`${API}product/${masp}`, formData , {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
          'content-type': 'multipart/form-data'
        },
      }).then((response) => {
      });
      
    }else{
      axios.put(`${API}productnoimage/${masp}`, {
          tensp:tensp,
          gia:gia,
          xuatxu: xuatxu,
          baohanh: baohanh,
          soluong: soluong,
          mota: mota,
          gioitinh:gioitinh, 
          math: math,
          maloai: maloai,
        } , {
        headers: {
          accessToken: localStorage.getItem("accessToken")
        },
      }).then((response) => {
      });
    }
    navigate("/admin/products", {replace:true});
  };

  return (
    <>
      <div className="container text-center my-3">
      <form encType='multipart/form-data'>
        <div className="card">
          <div className='card-header'>
            <h1 className="h3 mb-3 fw-normal">Sửa sản phẩm</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form mb-3">
                  <div className="row">
                    <div className="col">
                      <img src={ process.env.PUBLIC_URL + "/assets/img/products/" + hinhanh}  className="img-thumbnail mt-3 mb-3" alt="..." />
                    </div>
                    <div className="col">
                      <label className="mb-3" htmlFor="hinhanh">Hình ảnh</label>
                      <input type="file" accept="image/*" onChange={onSelectFile} className="form-control" id="hinhanh" placeholder="Chọn hình ảnh" />
                      {selectedFile &&  <img src={preview}  className="img-thumbnail mt-3 mb-3" alt="..." /> }
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="masp" placeholder="Nhập tên sản phẩm" value={masp} readOnly />
                  <label htmlFor="masp">Mã sản phẩm</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="tensp" placeholder="Nhập tên sản phẩm" 
                    value={tensp} onChange={(e)=>{setTensp(e.target.value)}} />
                  <label htmlFor="tensp">Tên sản phẩm</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="gia" placeholder="Nhập giá" 
                    value={gia} onChange={(e)=>{setGia(e.target.value)}} />
                  <label htmlFor="gia">Giá</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="xuatxu" placeholder="Nhập xuất xứ" 
                    value={xuatxu} onChange={(e)=>{setXuatxu(e.target.value)}}/>
                  <label htmlFor="xuatxu">Xuất xứ</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="baohanh" placeholder="Nhập bảo hành" 
                    value={baohanh} onChange={(e)=>{setBaohanh(e.target.value)}}/>
                  <label htmlFor="baohanh">Bảo hành</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="soluong" placeholder="Nhập số lượng" 
                    value={soluong} onChange={(e)=>{setSoluong(e.target.value)}}/>
                  <label htmlFor="soluong">Số lượng</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea type="text" className="form-control" id="mota" placeholder="Nhập mô tả" rows={4} cols={50} style={{height:'100px'}}
                    value={mota} onChange={(e)=>{setMota(e.target.value)}}/>
                  <label htmlFor="mota">Mô tả</label>
                </div>
                <div className="row mb-3">
                  <div className="col-3 text-start">
                    <label>Giới tính</label>
                  </div>
                  <div className="col-9 text-start">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="nam" 
                        value="1" checked={gioitinh === 1} onChange={(event) => { setGioitinh(parseInt(event.target.value)) }}/>
                      <label className="form-check-label" htmlFor="nam">Nam</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="nu" 
                        value="0" checked={gioitinh === 0} onChange={(event) => { setGioitinh(parseInt(event.target.value)) }}/>
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
                  <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button>
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

      {/*Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Xác nhận
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Bạn có muốn sửa sản phẩm này không</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button type="button" onClick={onSubmit} className="btn btn-primary" data-bs-dismiss="modal">
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct