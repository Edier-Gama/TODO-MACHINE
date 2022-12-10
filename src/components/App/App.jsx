
import React from 'react';
import './App.css';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import {Modal} from '../TodoModal/Modal'
import {TodoForm} from '../TodoForm/TodoForm'
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../TodoEmpty/EmptyTodos';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { EmptyResults } from '../EmptyResults/EmptyResults';
import { ShowTodos } from '../ShowTodos/ShowTodos';


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
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
      <TodoSearch
      loading={loading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      onError={() => <TodoError/>}
      onLoading={() => <TodoLoading/>}
      onEmptyTodos={() => <EmptyTodos/>}
      onEmptyResults={() => <EmptyResults
        searchValue={searchValue}
      />}
      onShowTodos={(todo) => <ShowTodos
       todo={todo}
       completeTodo={completeTodo}
       deleteTodo={deleteTodo}
      />}
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
     loading={loading}
     setOpenModal={setOpenModal}
     openModal={openModal}
   />
   </React.Fragment>
  )

}
export default App;