const { Todo } = require('../model/Todo');

// Create a new Todo
const createTodo = async (req, res) => {
    console.log(req.body);
    try {
        const todo = await Todo.create({
            text: req.body.text
        });
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
};

// Fetch all Todos
const fetchAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.json(error);
    }
};

// Fetch a Todo
const fetchTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            text: req.body.text
        });
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createTodo, fetchAllTodos, fetchTodo, updateTodo, deleteTodo};