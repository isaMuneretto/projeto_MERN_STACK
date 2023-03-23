const express = require('express');
const app = express();
 
//temos que importar a rota para cá, então primeiro exporta lá no user.route
const userRoute = require("./src/routes/user.route") //aqui importa
const port = 3000;

app.use(express.json()); //envia arquivos json
//como utilizar de fato o user.route
app.use("/user", userRoute);

//ROTA é a porta de entrada da nossa API, do nosso backend
//Method HTTP - É a forma como a internet se comunica - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info
    // PATCH - Altera parte da info
    // DELETE - Apaga uma info

//Name('/') - É um identificador da rota

//Function (Callback "função executado por trás de outra função") "(req, res)" - Responsavel por executar algum comando

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));   //função da porta e função de callback com arrow function inline (não precisa das chaves)