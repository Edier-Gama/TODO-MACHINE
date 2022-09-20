import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

const todos=[
    {text:'Cortar cebolla', completed:false},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false}
];


function App() {

    // Todos los componentes deben estar dentro de un solo componente
    // por estandar es React.Fragment

 return (
   
    <React.Fragment>

      <TodoCounter/>

      <TodoSearch/>
     
      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>

 )

}

export default App;
