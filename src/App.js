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

let searchedTodos = []

function App() {

const [searchValue, setSearchValue] = React.useState('')
const completedTodos = todos.filter(todo => !!todo.completed).length
const totalTodos = todos.length
//     // Todos los componentes deben estar dentro de un solo componente
//     // por estandar es React.Fragment


    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
    
 return (

    <React.Fragment>

      <TodoCounter
         total={totalTodos}
         completed={completedTodos}
        
      />

      <TodoSearch
         searchValue={searchValue}
         setSearchValue={setSearchValue}
      
      />
     
      <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
        ))}

      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>

 )

}

export default App;
