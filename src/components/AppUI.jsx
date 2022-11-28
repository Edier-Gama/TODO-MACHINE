import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.css';
import { TodoItem } from './TodoItem';

function AppUI() {
    
    const {
        loading,
        error,
        searchedTodos,
        deleteTodo,
        completeTodo,
        
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
        
    
     

     <CreateTodoButton/>
     </React.Fragment>
    )
}


export { AppUI }




