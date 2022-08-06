import React from "react";
function Search(){
    return(
        <>
          <form>
                <label>Your name </label>
                <input
                 type="text"
                  placeholder="your name here"
                //   value={search}
                //   onChange={e=>onsearchchange(e.target.value)}
                  />
            </form>
        </>
    )
}
export default Search