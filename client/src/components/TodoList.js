import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
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


    // Update Todo data in Database
    const updateTodo = (todoId, newValue) => {
        console.log(todoId, newValue)

        axios.patch(`http://localhost:5000/api/todos/${todoId}`, newValue)
            .then(response => response.data && swal("Successfully updated", "Your Todo is successfully updated!", "success"))
            .catch(error => console.log(error));

      };

    // optional code here
    const completeTodo = id => {
        // let updateedTodos = allTodo.map(todo => {
        //     if(todo.id === id){
        //         // todo.isComplete
        //     }
        // })
    }


    // all data call
    useEffect(() =>{
        fetch('http://localhost:5000/api/todos')
        .then(res=> res.json())
        .then(data => {
            setAllTodo(data)
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
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default TodoList;