import React from "react";
import { TodoContext } from "../TodoContext/index";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import './App.css';
import { TodoItem } from '../TodoItem/TodoItem';
import {Modal} from '../TodoModal/Modal'
import {TodoForm} from '../TodoForm/TodoForm'


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




