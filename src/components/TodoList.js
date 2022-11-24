import React from "react";


function TodoList(props) {
    return(
        <section>
                {props.children}
        </section>
    );
}

export {TodoList}