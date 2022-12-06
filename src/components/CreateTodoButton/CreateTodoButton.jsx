import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
    }
    return(
        <div className="newTodoIcon">
            <button onClick={onClickButton}>
                <p>+</p>
            </button>
        </div>
    )
}

export{CreateTodoButton}