/* forma antiga de importar no JS (common JS)
const express = require('express'); 
const connectDatabase = require("./src/database/db") */


//ES module
import express from 'express'; 
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js"; //temos que importar a rota para cá, então primeiro exporta lá no user.route
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const port = process.env.PORT || 3000; //todo servidor tem, é padrao
const app = express();

connectDatabase();
app.use(express.json()); //envia arquivos json
//como utilizar de fato o user.route
app.use("/user", userRoute);
app.use("/auth", authRoute);

//ROTA é a porta de entrada da nossa API, do nosso backend
//Method HTTP - É a forma como a internet se comunica - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info. Ex: Atualiza todo o obj criado.
    // PATCH - Altera parte da info. Ex: Altera só o nome do obj.
    // DELETE - Apaga uma info

//Name('/') - É um identificador da rota

//Function (Callback "função executado por trás de outra função") "(req, res)" - Responsavel por executar algum comando

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));   //função da porta e função de callback com arrow function inline (não precisa das chaves)