import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Search() {

    const [inputSearch, setInputSearch] = useState("")
    let navigate = useNavigate();

    const handleSubmit = () => {
        if(inputSearch===""){
            navigate("/products",{ replace: true });
        }else{
            navigate(`search/${inputSearch}`);
        }
    }

    return (
        <form className="d-flex" role="search" onSubmit={ handleSubmit }>
            <input className="form-control me-2" type="search"  placeholder="Search" onChange={(e)=>{setInputSearch(e.target.value)}} value={inputSearch} aria-label="Search" />               
            <button className="btn btn-outline-success" type='submit'><i className="fa fa-search fa-lg"/></button>              
        </form>
    )
}

export default Search