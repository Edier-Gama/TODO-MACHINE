import React  from "react";
import './TodoForm.css'

function TodoForm({addTodo,setOpenModal,OpenModal}) {

const [newTodoValue, setNewTodoValue] = React.useState('')   
const [available, setAvailable] = React.useState(false)


    const onCancel = () => {
       setOpenModal(OpenModal)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setNewTodoValue('')
        setOpenModal(OpenModal)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
        newTodoValue.length > 1 ? setAvailable(true): setAvailable(false)
    }

    const add = !available ? 'submitButton inactive' : 'submitButton'
    const cancel = !available ? 'cancelButton inactive' : 'cancelButton'

return (
   <div className='form'>
     
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="👈 Write your new todo..."
        className="textArea"
        />
    
     <button type="button"onClick={onSubmit}className={add}>ADD</button>
     <button type="submit"onClick={onCancel} className={cancel}>CANCEL</button>
   </div>
)
}


export {TodoForm}