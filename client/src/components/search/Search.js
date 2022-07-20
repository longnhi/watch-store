import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Search() {

    const [inputSearch, setInputSearch] = useState("")
    let navigate = useNavigate();

    const handleSubmit = () => {
        if(inputSearch===""){
            navigate("/",{ replace: true });
        }else{
            navigate(`search/${inputSearch}`);
        }
    }

    return (
        <form role="search" onSubmit={ handleSubmit }>
            <div className="row">
                <div className="col-10">
                <input className="form-control" type="search" placeholder="Search" onChange={(e)=>{setInputSearch(e.target.value)}} value={inputSearch} aria-label="Search" />
                </div>
                <div className="col-2">
                <button className="btn btn-outline-success" type='submit'><i className="fa fa-search fa-lg"/></button>
                </div>
            </div>
        </form>
    )
}

export default Search