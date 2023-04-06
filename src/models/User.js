const mongoose = require('mongoose')

//limita como os documentos serão criados
const UserSchema = new mongoose.Schema({  //Schema é um metodo do mongoose. Aqui foi criado uma instância do Schema 
    //cria um objeto
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema); //definiu o Schema. Nome da model "User" e de onde vem UserSchema.

module.exports = User;
