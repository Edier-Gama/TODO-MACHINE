import React  from "react";
import { TodoContext } from "../TodoContext/index";
import './TodoForm.css'

function TodoForm(props) {

   const [newTodoValue, setNewTodoValue] = React.useState('')   

const {
    addTodo,
    setOpenModal,
    OpenModal
} = React.useContext(TodoContext)

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
       placeholder="Escribe tu nuevo TODO uwu"
       className="textArea"
       />

       <div className="buttonsContainer">
        <button
          type="button"
          onClick={onCancel}
          className='cancelButton'
        >
            Cancelar
        </button>

        <button
          type="submit"
          className="submitButton"
        >
            Añadir
        </button>
       </div>
    </form>

)
}


export {TodoForm}