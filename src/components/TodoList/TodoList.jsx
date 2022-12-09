import React from "react";


function TodoList(props) {
    return(
        <section>
            {props.loading && props.onLoading()}
            {props.error && props.onError()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
            {props.searchedTodos.map(todo => props.render(todo))}
                {props.children}
        </section>
    );
}

export {TodoList}