/*ANOTAÇÕES
- Service acessa o nosso banco de dados através da nossa model USer
- a rota se comunica com o controller e o controller faz alguma logica e manda as informações para o server.
o service vai se conectar com o banco de dados e mostra isso para nós.
- importa da model que é onde definiu os campos (models->User.js)*/

import User from "../models/User.js";

const createService = (body) => User.create(body);  //é assícrono, pois vai lá no banco de dados, vai conectar, criar e retornar lá no controller   
/*recebe os dados do body e passa para a arrow function o que recebeu como parâmetro que é o body novamente.
 User é o Schema que foi importado em cima. Create é um método do mongoose que cria um novo item dentro desse Schema.*/

const findAllUserService = () => User.find();

const findByIdService = (idUser) => User.findById(idUser);//findById é um método proprio do mongoose

const updateService = (//os campos abaixo são do controller
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => //função inline 
    User.findOneAndUpdate( //"procure um id e atualize"
        { _id: id }, //o primeiro  é a representação do id no mongoose e recebe o id do objeto acima
        { name, username, email, password, avatar, background }//segundo parametro é um obj com todos os campos que eu quero atualizar
    );

export default {  //exporta o create
    createService,
    findAllUserService,
    findByIdService,
    updateService,
};  