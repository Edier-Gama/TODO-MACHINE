import React from"react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <div className="TodoItem-Div">
            <p>{props.text}</p>
        </div>

    );
}

export { TodoItem };