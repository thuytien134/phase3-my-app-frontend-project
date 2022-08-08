import React from "react";
function Search({search,onSearchChange}){
  // debugger
    return(
        <>
          <nav>
                <label>Your name </label>
                <input
                 type="text"
                  placeholder="your name here"
                  value={search}
                  // autoComplete="off"
                  onChange={e=>onSearchChange(e.target.value)}
                  />
                  {/* <button>Search</button> */}
            </nav>
        </>
    )
}
export default Search