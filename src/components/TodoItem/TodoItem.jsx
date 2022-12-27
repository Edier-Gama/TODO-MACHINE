import React from"react";
import './TodoItem.css'

function TodoItem(props){

    
    return(
        <div className="TodoItem-Div">
            <img 
            className="check"
            src="https://cdn-icons-png.flaticon.com/512/60/60731.png" 
            alt="" 
            onClick={props.onComplete}
            />
            <img 
            className="delete"
            src="https://cdn-icons-png.flaticon.com/512/3221/3221803.png" 
            alt="" 
            onClick={props.onDelete}
            />
            <p className="todoText">{props.text}</p>
        
        </div>
       

    );
}

export { TodoItem };