import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {API} from '../../config/API';
import {AuthContext} from '../../context/AuthContext';

const ButtonFavorite = (props) => {
    let masp = props.masp;
    let navigate = useNavigate();
    const [ isFavorite, setIsFavorite] = useState(false);
    const { customerState } = useContext(AuthContext);

    useEffect(() => {
        if(customerState){
            axios.get(`${API}favorite`, {
                params: {
                    masp:masp,
                    makh:customerState.makh
                },
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res)=> {
                if(res.data.length > 0){
                    setIsFavorite(true);
                    if(props.textFavorite){
                        props.setTextFavorite("Bỏ thích");
                    }
                }else{
                    setIsFavorite(false);
                    if(props.textFavorite){
                        props.setTextFavorite("Yêu thích");
                    }
                }
            });
        }else{
        }
    },[masp,customerState,props]);

    const addFavorite = () => {
        let item = localStorage.getItem('accessToken');
        if(!item){
            navigate("/login",{ replace: true });
        }else {
            axios.post(`${API}favorite`,{ masp: masp, makh: customerState.makh }, {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                setIsFavorite(true);
                if(props.textFavorite){
                    props.setTextFavorite("Bỏ thích");
                }
            });
        }
    };

    const deleteFavorite = () => {
        let item = localStorage.getItem('accessToken');
        if(!item){
            navigate("/login",{ replace: true });
        }else {
            axios.delete(`${API}favorite`, {
                params: {
                    masp:masp,
                    makh:customerState.makh
                },
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                setIsFavorite(false);
                if(props.textFavorite){
                    props.setTextFavorite("Yêu thích");
                }
            });
        }
    };
    return (
        <>
            {isFavorite===false && <button onClick={() => {addFavorite()}} className="card-link btn link-dark"><i className="fa fa-heart-o fa-2x" />{props.textFavorite && <>{props.textFavorite}</>}</button>}
            {isFavorite===true && <button onClick={() => {deleteFavorite()}} className="card-link btn link-danger"><i className="fa fa-heart fa-2x" />{props.textFavorite && <>{props.textFavorite}</>}</button>}
        </>
    )
}

export default ButtonFavorite