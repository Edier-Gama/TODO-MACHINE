import React from "react";
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue, loading}) {
    const onSearchValueChange = (event) => {
       setSearchValue(event.target.value)
    }
    return (
        <React.Fragment>
            <div className="TodoSearch">
               <input className="TodoSearch-Input" 
               placeholder='SEARCH TODOS'
               onChange={onSearchValueChange}
               value={searchValue}
               disabled={loading}
               />
        
               <button 
               className="TodoSearch-Button"
               disabled={loading}
               >🔎</button>
            </div>
        </React.Fragment>
    )
}
export {TodoSearch}