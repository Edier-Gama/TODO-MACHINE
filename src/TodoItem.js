import React from"react";
import './TodoItem.css'

function TodoItem(props){

    const onComplete = () => {
        alert('Se ha completado el TODO')
    }
    const onDelete = () => {
        alert('Se ha completado el TODO')
    }
    return(
        <div className="TodoItem-Div">
            <span 
                className="material-symbols-outlined check"
                onClick={onComplete}> 
                check_circle
            </span>
            <span 
            className="material-symbols-outlined delete"
            onClick={onDelete}>
                delete
            </span>

            <p>{props.text}</p>
        
        </div>

    );
}

export { TodoItem };