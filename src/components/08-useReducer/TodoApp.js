import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

import './style.css';
import { TodoAdd } from './TodoAdd';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleToggle = (todosId) => {
        dispatch({
            type: 'toggle',
            payload: todosId
        })
    }

    const handleDelete = (todosId) => {
        
         const action = {
            type:'delete',
            payload: todosId
        }

        dispatch(action);
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr></hr>

            <div className="row">

                <TodoList 
                todos = {todos} 
                handleDelete = {handleDelete}
                handleToggle = {handleToggle}
                />

                <div className="col-5">
                  <TodoAdd 
                    handleAddTodo ={handleAddTodo}
                  />  
                </div>

            </div>
        </div>
    )
}
 