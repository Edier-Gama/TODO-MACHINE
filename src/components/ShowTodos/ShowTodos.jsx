import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

function ShowTodos({todo, deleteTodo, completeTodo}) {
    return (
        <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
    )  
}

export {ShowTodos}