import React, { useEffect, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Todo = ({ allTodo, completeTodo }) => {
    // const [edit, setEdit] = useState({
    //     text: ''
    // })

    

    
    // console.log(allTodo)

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
                        // onClick={() => removeTodo(todo.id)}
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