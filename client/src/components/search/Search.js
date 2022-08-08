import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [inputSearch, setInputSearch] = useState("")
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputSearch.replace(/\s+/g,' ').trim()===""){
            //navigate("/products",{ replace: true });
            setInputSearch("");
        }else{  
            setInputSearch("");
            navigate(`search/${inputSearch.replace(/\s+/g,' ').trim()}`);
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