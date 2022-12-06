import React from"react";
import './TodoItem.css'

function TodoItem(props){


    return(
        <div className="TodoItem-Div">
            <span 
                className={"material-symbols-outlined check"}
                onClick={props.onComplete}> 
                check_circle
            </span>
            <span 
            className="material-symbols-outlined delete"
            onClick={props.onDelete}>
            delete
            </span>

            <p className="todoText">{props.text}</p>
        
        </div>
       

    );
}

export { TodoItem };