import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.css';
import { TodoItem } from './TodoItem';

function AppUI({

    total,
    completed,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo

}) {



    return(
      
    <React.Fragment>
        <TodoCounter
        total={total}
        completed={completed}
     />

     <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
     
     />
    
     <TodoList>
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




