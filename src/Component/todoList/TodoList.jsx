import React, { useState } from 'react';
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState("");
    const [todoList, setTodosList] = useState([]);

    const clickhandler = () => {
        setTodos('');
        setTodosList((oldArray) => [...oldArray, todos])
        // setTodosList(todos)

        // console.log("todo",todos)
    }

    return (
        <>
            <div className='mainDiv'>
                <h3>Create Todo List</h3>
                <div className='subDiv'>
                <input type="text" onChange={(e) => setTodos(e.target.value)} id="todoStyle" value={todos} />
                <button onClick={clickhandler} className="buttons">Add</button>
                </div>
                <div>{todoList.map((a, i) => (
                        <p key={i} className="todoList">{a}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TodoList;


