const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'Please Todo is required'],
    },
})  

const Todo = mongoose.model('Todo', todoSchema);
module.exports = {Todo};