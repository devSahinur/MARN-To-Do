import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [allTodo , setAllTodo] = useState()

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodo = [todo, ...todos]

        setTodos(newTodo)
        console.log(...todos)
    }

    const completeTodo = id => {
        let updateedTodos = todos.map(todo => {
            if(todo.id === id){
                // todo.isComplete
            }
        })
    }

    useEffect(() =>{
        fetch('http://localhost:5000/api/todos')
        .then(res=> res.json())
        .then(data => {
            setAllTodo(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                allTodo={allTodo}
                completeTodo={completeTodo}
            />
        </div>
    );
};

export default TodoList;