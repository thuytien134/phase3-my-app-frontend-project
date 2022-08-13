import React from "react";

function Search({ search, onSearchChange ,handleClick}) {

 
  return (
    <>
      <nav style={{marginLeft: "5rem"}}>
        <label>Customer name:  </label>
        <input
          type="text"
          placeholder="your name here"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
        <button onClick={handleClick} >Search</button>
      </nav>
    </>
  )
}
export default Search