
import React from 'react';
import './App.css';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import {TodoForm} from '../TodoForm/TodoForm'
import { TodoError } from '../TodoError/TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { EmptyResults } from '../EmptyResults/EmptyResults';
import { ShowTodos } from '../ShowTodos/ShowTodos';
import { ChangeWithListener } from '../ChangeAlert';


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
     <TodoForm
      addTodo={addTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
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
      onEmptyResults={() => <EmptyResults
        searchValue={searchValue}
      />}
      onShowTodos={(todo) => <ShowTodos
       key={todo.text}
       todo={todo}
       completeTodo={completeTodo}
       deleteTodo={deleteTodo}
      />}
    />

   <ChangeWithListener/>
   </React.Fragment>
  )

}
export default App;