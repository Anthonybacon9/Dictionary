import { useState } from "react";
import React from "react";

function SearchBar(props) {
    const [inputValue, setinputValue] = useState("")
    const search = () => {props.search(inputValue)};

    return (
        <div className="inputArea" >
            <input type="text" onChange={(e) => {setinputValue(e.target.value)}}/>
            <button onClick={search}> Search </button>
        </div>
    );
}

export default SearchBar