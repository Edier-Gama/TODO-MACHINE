
import React from 'react';
import './App.css';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import {Modal} from '../TodoModal/Modal'
import {TodoForm} from '../TodoForm/TodoForm'
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../TodoEmpty/EmptyTodos';
import { TodoLoading } from '../TodoLoading/TodoLoading';


function App() {

  const {
    loading,
    error,
    searchedTodos,
    deleteTodo,
    completeTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo    
} = useTodos()

return(  
  <React.Fragment>
    <TodoHeader>
    <TodoCounter
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      onError={() => <TodoError/>}
      onLoading={() => <TodoLoading/>}
      onEmptyTodos={() => <EmptyTodos/>}
      render={todo => (
        <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
         />
     )}
    />

    {openModal && (
    <Modal>
      <TodoForm
      addTodo={addTodo}
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
export default App;