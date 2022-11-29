import React from "react";
import '../styles/TodoSearch.css'
import {TodoContext} from '../components/TodoContext/index'


function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
       setSearchValue(event.target.value)
    }
    return (

        <React.Fragment>
            <div className="TodoSearch">
               <input className="TodoSearch-Input" 
               placeholder='Busca un ToDo'
               onChange={onSearchValueChange}
               value={searchValue}/>
        
               <button className="TodoSearch-Button">🔎</button>
            </div>
        </React.Fragment>
    )
}
export {TodoSearch}