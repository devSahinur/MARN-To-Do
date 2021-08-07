const express = require('express');
const route = express.Router();
const {createTodo, fetchAllTodos, fetchTodo, updateTodo, deleteTodo  } = require('../controller/todoCtrl');

route.post('/todos', createTodo)
route.get('/todos', fetchAllTodos)
route.get('/todos/:id', fetchTodo)
route.patch('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)

module.exports = {route};