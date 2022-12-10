import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
    }
    const className = !props.loading ? 'newTodoIcon': `newTodoIcon inactive`

    return(
        <div className={className}>
            <button onClick={onClickButton}>
                <p>ADD</p>
            </button>
        </div>
    )
}

export{CreateTodoButton}