import React, { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] =useState('')

    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            text: input
        })
        setInput('')
        // console.log(e.target.value)
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input 
                    type="text"
                    placeholder='Add a Todo'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                 />
                 <button className='todo-button'>Add todo</button>
            </form>
        </div>
    );
};

export default TodoForm;