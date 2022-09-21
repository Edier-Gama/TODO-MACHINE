import React from "react";
import './TodoCounter.css'


function TodoCounter({total, completed}) {
    return (
        <div className="TodoCounter">
            <h2>Lista de TODOS</h2>
            <p>Has completado {completed} de {total} TODOS</p>
        </div>
    )
}

export {TodoCounter}