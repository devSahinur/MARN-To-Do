const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { dbConnect } = require('./config/dbConnect');


const app = express();


//dbConnect
dbConnect();

//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`))