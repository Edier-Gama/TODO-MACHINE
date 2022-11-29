import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.css';
import { TodoItem } from './TodoItem';
import {Modal} from './Modal'
import {TodoForm} from './TodoForm'


function AppUI() {
    
    const {
        loading,
        error,
        searchedTodos,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal
        
    } = React.useContext(TodoContext)


    return(
      
    <React.Fragment>
    
      <TodoCounter/>

      <TodoSearch/>



        <TodoList>
               {loading && <p>un momento, estamos cargando...</p>}
               {error && <p>Upss, hubo un error</p>}
               {(!loading && !searchedTodos.length) && <p>¡Crea tu primer ToDO!</p> }
       
               {searchedTodos.map(todo => (
        <TodoItem 
           
              key={todo.text} 
              text={todo.text}
              completed = {todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
           />
       ))}

       </TodoList>
        
      {openModal && (
            <Modal>
              <TodoForm
               openModal={openModal}
               setOpenModal={setOpenModal}
              />
            </Modal>
      )}
    
     

     <CreateTodoButton
       setOpenModal={setOpenModal}
       openModal={openModal}
     />
     </React.Fragment>
    )
}


export { AppUI }




