import React from "react";
import '../styles/TodoCounter.css'
import {TodoContext} from '../components/TodoContext/index'


function TodoCounter() {
    
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <div className="TodoCounter">
            <h2>Lista de TODOS</h2>
            <p>Has completado {completedTodos} de {totalTodos} TODOS</p>
        </div>
    )
}

export {TodoCounter}