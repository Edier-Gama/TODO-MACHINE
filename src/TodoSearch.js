import React from "react";
import './TodoSearch.css'

function TodoSearch() {

    const onSearchValueChange = (event) => {
       console.log(event.target.value);
    }
    return (

        <React.Fragment>
            <div className="TodoSearch">
               <input className="TodoSearch-Input" 
               placeholder='Busca un ToDo'
               onChange={onSearchValueChange}/>


               <button className="TodoSearch-Button">🔎</button>
            </div>
        </React.Fragment>
    )
}
export {TodoSearch}