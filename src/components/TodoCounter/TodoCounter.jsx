import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos}) {
    
    return (
        <div className="TodoCounter">
            <h2>Lista de TODOS</h2>
            <p>Has completado {completedTodos} de {totalTodos} TODOS</p>
        </div>
    )
}

export {TodoCounter}