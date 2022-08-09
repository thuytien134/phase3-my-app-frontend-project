import React from "react";

function Search({ search, onSearchChange ,setIsDisplay}) {
  // debugger
  // const [isClick, setIsClick]= useState(false)
 
  return (
    <>
      <nav >
        <label>Your name:  </label>
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