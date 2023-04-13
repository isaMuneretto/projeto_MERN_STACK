//const mongoose = require('mongoose'); (common JS)
import mongoose from "mongoose";

const connectDatabase = () => { //conexão com o banco de dados
    console.log("Waiting connecting  to the database")
    
    mongoose
        .connect( process.env.MONGODB_URI ,  //acessar a variavel global no arquivo .env
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
};

export default connectDatabase;

//module.exports = connectDatabase; (commonJS)

//variaveis de ambientes são variaveis globais que sao capturadas em qualquer parte do codigo e que guardam dados sensiveis
