import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}) {
    
    const className = !loading ? 'TodoCounter': `TodoCounter inactive`
    return (
        <div className={className}>
            <h2>TODO MACHINE</h2>
            <p>YOU'VE COMPLETED {completedTodos} OF {totalTodos} TODOS</p>
        </div>
    )
}

export {TodoCounter}