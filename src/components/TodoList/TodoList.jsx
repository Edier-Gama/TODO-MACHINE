import React from "react";


function TodoList(props) {
    return(
        <section>
            {props.loading && props.onLoading()}
            {props.error && props.onError()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResults()}
            {props.searchedTodos.map(todo => props.onShowTodos(todo))}
            {props.children}
        </section>
    );
}

export {TodoList}