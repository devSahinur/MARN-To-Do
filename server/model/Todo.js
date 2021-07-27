const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please Todo is required'],
    },
},
{
  timestamps: true,
}

);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};