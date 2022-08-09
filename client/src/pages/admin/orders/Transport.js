import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {API} from '../../../config/API';
import ItemTransport from './ItemTransport';

const Transport = () => {
  let {madh} = useParams();
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [mathang,setMathang] = useState([]);

  useEffect(() => {
    axios.get(`${API}order/detail/`+madh, { 
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
        setListOrderDetail(response.data);
    })
  }, [madh]);

  return (
    <div className="mt-3" >
      {listOrderDetail.map((item) => {
        return (
          <ItemTransport key={item.masp} item={item} mathang={mathang} setMathang={setMathang} />
        )
      })}
    </div>
  )
}

export default Transport