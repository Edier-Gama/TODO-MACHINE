import { getQueriesForElement } from "@testing-library/react";
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
            >
                delete
            </span>

            <p>{props.text}</p>
        
        </div>
       

    );
}

export { TodoItem };