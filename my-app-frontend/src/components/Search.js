import React from "react";

function Search({ search, onSearchChange ,setIsDisplay}) {

 
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
        <button onClick={()=> setIsDisplay(true)} >Search</button>
      </nav>
    </>
  )
}
export default Search