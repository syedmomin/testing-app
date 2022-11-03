import React, { useState } from 'react';
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = React.useState("");

    const clickhandler = () => {
        setTodos(todos.target.value)
    }

    return (
        <>
            <h3>Create Todo List</h3>
            <input type="text" value={todos} id="weew"/>
            <button onClick={clickhandler}>Add task</button>
        </>
    )
}

export default TodoList;


