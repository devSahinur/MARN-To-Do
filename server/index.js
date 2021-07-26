const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { dbConnect } = require('./config/dbConnect');
const { route } = require('./routes/todoRoute');

const app = express();

//dbConnect
dbConnect();

//Middleware
app.use(express.json());

//Routes
app.use('/api', route);

//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`))