import React from "react";
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(`mensaje = ${msg}`)
    }
    return(
        <div className="newTodoIcon">
            <button onClick={() => onClickButton('Aquí se debería abrir un Modal')}>
                <p>+</p>
            </button>
        </div>
    )
}

export{CreateTodoButton}