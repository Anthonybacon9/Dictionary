import { useState } from "react";
import React from "react";
import './App.css';

function SearchBar(props) {
    const [inputValue, setinputValue] = useState("")
    const search = () => {props.search(inputValue)};

    return (
        <div className="wrap">
            <div className="search" >
                <input type="text" placeholder="Enter a word" className="searchTerm" onChange={(e) => {setinputValue(e.target.value)}}/>
                <button className='searchButton' onClick={search}> Search </button>
            </div>
        </div>
    );
}

export default SearchBar