import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [allTodo , setAllTodo] = useState()

    // Todo Data added database
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

    axios.post('http://localhost:5000/api/todos', todo)
        .then(response => response.data && swal("Successfully Added", "Your Todo is successfully added!", "success"))
        .catch(error => console.log(error));
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
                setAllTodo={setAllTodo}
            />
        </div>
    );
};

export default TodoList;