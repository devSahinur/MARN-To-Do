import axios from 'axios';
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import swal from 'sweetalert';


const Todo = ({ allTodo, completeTodo, setAllTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  });


  // delete Todo function
  const removeTodo =(id)=> {
    const deleteItems = allTodo.filter(item => item._id !== id);
    
    axios.delete(`http://localhost:5000/api/todos/${id}`)
    .then(response => {
      response && setAllTodo(deleteItems) 
      })
      .catch(error => {
          console.log(error);
      })
      swal("Successfully Deleted", "Your Todo is successfully Delete!", "success")
  };

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      text: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

    return (
        <div className='allTodo'>
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
                        onClick={() => setEdit({ id: todo?._id, text: todo?.text })}
                        className='edit-icon'
                      />
                    </div>
                  </div>))
            }
        </div>
    );
};

export default Todo;
