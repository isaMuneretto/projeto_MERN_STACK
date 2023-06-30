import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';

//schema limita como os documentos serão criados
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
        unique: true, //é um email único
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, 
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

//o pre se usa para antes de salvar o Schema, faça alguma coisa. Tem duas funcoes. "antes de salvar, execute a funcao"
UserSchema.pre("save", async function (next) {
    this.password = await bcryptjs.hash(this.password, 10);   //hash faz contas matematicas para que a senha fique irreconhecivel e criptografada. 10(salts)"ideal"
    next(); //aqui para e segue para a proxima execucao
}) 

const User = mongoose.model("User", UserSchema); //definiu o Schema. Nome da model "User" e de onde vem UserSchema.

export default User;
