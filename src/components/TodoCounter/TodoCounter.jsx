import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}) {
    
    const className = !loading ? 'TodoCounter': `TodoCounter inactive`
    return (
        <div className={className}>
            <h2>Lista de TODOS</h2>
            <p>Has completado {completedTodos} de {totalTodos} TODOS</p>
        </div>
    )
}

export {TodoCounter}