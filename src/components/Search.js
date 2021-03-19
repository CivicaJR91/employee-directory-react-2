import React from "react";

function Search(props) {

    return (
        <div>
            <label htmlFor="search"> Search by Name</label>
            <input type="text" onChange = {props.handleInputChange} value={props.value} name= "searched"></input>
            <button type="submit" onClick = {props.handleFormSubmit}>Search</button>
        </div>
    )
}

export default Search;

