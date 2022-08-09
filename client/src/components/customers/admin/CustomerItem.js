import React, {useState} from 'react'
import axios from 'axios';
import { API } from '../../../config/API';

const CustomerItem = (props) => {

    const [customer,setCustomer] = useState(props.customer);

    const lock = async (email,status) => {
        await axios.put(`${API}customers`, {email:email,status:status} ,{
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }).then((response) => {
            setCustomer({...customer,status:status});
        });
    };

    return (
        <>
            <td>{customer.makh}</td>
            <td>{customer.hoten}</td>
            <td>{customer.sodienthoai}</td>
            <td>{customer.email}</td>
            <td>{customer.status===1?"Đang hoạt động":"Đã khóa"}</td>
            <td>{customer.status===1? (
                <button className="btn" onClick={()=>{lock(customer.email, 0)}}><i className="fa fa-unlock-alt"/></button>
            ):(
                <button className="btn" onClick={()=>{lock(customer.email, 1)}}><i className="fa fa-lock"/></button>
            )}
            </td>
        </>
    )
}

export default CustomerItem