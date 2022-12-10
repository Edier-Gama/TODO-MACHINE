import React  from "react";
import './TodoForm.css'

function TodoForm({addTodo,setOpenModal,OpenModal}) {

const [newTodoValue, setNewTodoValue] = React.useState('')   


    const onCancel = () => {
       setOpenModal(OpenModal)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(OpenModal)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
return (

    <form onSubmit={onSubmit}
      className='form'
    >
       <textarea 
       value={newTodoValue}
       onChange={onChange}
       placeholder="WRITE YOUR NEW TODO..."
       className="textArea"
       />

       <div className="buttonsContainer">
        <button
          type="button"
          onClick={onCancel}
          className='cancelButton'
        >
            CANCEL
        </button>

        <button
          type="submit"
          className="submitButton"
        >
            ADD
        </button>
       </div>
    </form>

)
}


export {TodoForm}