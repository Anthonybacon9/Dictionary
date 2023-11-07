import React from "react";

function SearchBar(props) {
    const search = () => {props.search()};

    return (
        <div className="inputArea" >
            <input type="text" />
            <button> Search </button>
        </div>
    );
}

export default SearchBar