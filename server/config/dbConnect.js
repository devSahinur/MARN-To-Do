// require('dotenv').config();
const mongoose = require('mongoose');

// const uri = process.env.MONGODB_URL;
const uri = "mongodb+srv://skmsi:skmsi@cluster0.1zupo.mongodb.net/todo?retryWrites=true&w=majority"

const dbConnect = async() => {
    try{
        const connected = await mongoose.connect( uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`MongoDb Connect successfully`);
    } catch (error) {

        console.log(`Error DB, ${error.message} `);
    }
};

module.exports = {dbConnect};