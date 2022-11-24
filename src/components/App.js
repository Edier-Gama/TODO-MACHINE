import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import '../styles/App.css';
import { TodoItem } from './TodoItem';

const defaultTodos=[
    {text:'Cortar cebolla', completed:undefined},
    {text:'Tormar el curso de intro a react', completed:true},
    {text:'Llorar con la llorona', completed:true}
];

let searchedTodos = []



function App() {

// usando el estado seguiremos el input del buscador y asi actualizarlo   
const [searchValue, setSearchValue] = React.useState('')
const [todos, setTodos] = React.useState(defaultTodos)



// Con esta funcion medimos los todos y se actualizan segun se completen o eliminen
const completedTodos = todos.filter(todo => todo.completed == true).length
const totalTodos = todos.length


// sistema de filtrado del buscador

    if (!searchValue.length >= 1) {
      searchedTodos = defaultTodos;
    } else {
      searchedTodos = defaultTodos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }

const completeTodos = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text)
   const newTodos = [...todos]
   todos[todoIndex].completed = true
   todos[todoIndex].text = 'Completado '
   setTodos(newTodos)
}


const deleteTodos = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text)
  const newTodos = [...todos]
  todos[todoIndex].completed = true
  todos[todoIndex].text = 'Eliminado'
  setTodos(newTodos)
}
 return (
  // Todos los componentes deben estar dentro de un solo componente
// por estandar es React.Fragment

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
            <TodoItem 
            
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
            />
        ))}

      </TodoList>
      

      <CreateTodoButton/>

    </React.Fragment>

 )

}

export default App;
