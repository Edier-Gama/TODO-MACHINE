import React from "react";
import './TodoSearch.css'

function TodoSearch() {
    return (

        <React.Fragment>
            <div className="TodoSearch">
               <input className="TodoSearch-Input" placeholder='Busca un ToDo'/>
               <button className="TodoSearch-Button">🔎</button>
            </div>
        </React.Fragment>
    )
}
export {TodoSearch}