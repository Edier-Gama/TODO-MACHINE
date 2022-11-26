
import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos=[
//     {text:'Cortar cebolla', completed:undefined},
//     {text:'Tormar el curso de intro a react', completed:true},
//     {text:'Llorar con la llorona', completed:true}
// ];

let searchedTodos = []



function App() {


const localStorageTodos = localStorage.getItem('TODOS_V1')
let parsedTodos;
  
  if (!localStorageTodos) {
     localStorage.setItem('TODOS_V1', JSON.stringify([]))  
  }else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

// usando el estado seguiremos el input del buscador y asi actualizarlo   
const [searchValue, setSearchValue] = React.useState('')
const [todos, setTodos] = React.useState(parsedTodos)


// Con esta funcion medimos los todos y se actualizan segun se completen o eliminen
const completedTodos = todos.filter(todo => todo.completed == true).length
const totalTodos = todos.length



// sistema de filtrado del buscador

    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }

const saveTodos = (newTodos) => {
   const stringifiedTodos = JSON.stringify(newTodos)
   localStorage.setItem('TODOS_V1', stringifiedTodos)
   setTodos(newTodos)
}
 

const completeTodos = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text)
   const newTodos = [...todos]
   todos[todoIndex].completed = true
   todos[todoIndex].text = 'Completado '
   saveTodos(newTodos)
}


const deleteTodos = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text)
  const newTodos = [...todos]
  newTodos.splice(todoIndex, 1)
  saveTodos(newTodos)
}
 return (

  // Todos los componentes deben estar dentro de un solo componente
  // por estandar es React.Fragment

    <React.Fragment>
         
         <AppUI
         total={totalTodos}
         completed={completedTodos}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         searchedTodos={searchedTodos}
         deleteTodo={deleteTodos}
         completeTodo={completeTodos}
         />

    </React.Fragment>

 )

}

export default App;
