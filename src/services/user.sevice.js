/*ANOTAÇÕES
- a rota se comunica com o controller e o controller faz alguma logica e manda as informações para o server.
o service vai se conectar com o banco de dados e mostra isso para nós.
- a model é o que eu quero cadastrar no meu banco (User.js)*/

const User = require("../models/User");

const createService = (body) => User.create(body);  //é assícrono, pois vai lá no banco de dados, vai conectar, criar e retornar lá no controller   
/*recebe os dados do body e passa para a arrow function o que recebeu como parâmetro que é o body novamente.
 User é o Schema que foi importado em cima. Create é um método do mongoose que cria um novo item dentro desse Schema.*/

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => //função inline 
    User.findOneAndUpdate(
        { _id: id }, //o primeiro obj é a representação do id no mongoose e recebe o id do objeto acima
        { name, username, email, password, avatar, background }//segundo parametro é um obj com todos os campos que eu quero atualizar
    );

module.exports = {  //exporta o create
    createService,
    findAllService,
    findByIdService,
    updateService,
};  