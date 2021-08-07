import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Todo = ({ allTodo, completeTodo, setAllTodo }) => {


  const removeTodo =(id)=> {
    console.log(id)
    const deleteItems = allTodo.filter(item => item._id !== id);
    
    axios.delete(`http://localhost:5000/api/todos/${id}`)
    .then(response => {
      response && setAllTodo(deleteItems);
      })
      .catch(error => {
          console.log(error);
      })
  }

    return (
        <>
            {
                allTodo?.map((todo) => ( 
                <div
                    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={todo?._id}
                  >
                    <div key={todo?.id} onClick={() => completeTodo(todo.id)}>
                      {todo?.text}
                    </div>
                    <div className='icons'>
                      <RiCloseCircleLine
                        onClick={() => removeTodo(todo._id)}
                        className='delete-icon'
                      />
                      <TiEdit
                        // onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        className='edit-icon'
                      />
                    </div>
                  </div>))
            }
        </>
    );
};

export default Todo;