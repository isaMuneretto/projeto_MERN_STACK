//const mongoose = require('mongoose'); (common JS)
import mongoose from "mongoose";

const connectDatabase = () => { //conexão com o banco de dados
    console.log("Waiting connecting  to the database")

    mongoose
        .connect(
            "mongodb+srv://isamuneretto:27819814@cluster0.jb9ryvj.mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
};

export default connectDatabase;

//module.exports = connectDatabase; (commonJS)
