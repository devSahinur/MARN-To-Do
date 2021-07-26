const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;

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