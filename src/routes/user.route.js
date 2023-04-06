const route = require('express').Router(); //cria rotas fora do arquivo principal
const userController = require('../controllers/user.controller');

const { validId, validUser } = require("../middlewares/global.middlewares");

route.post("/", userController.create);  //a função de callback vai ficar desmembrada dentro de controllers. //requisição post com user é pq está criando um novo usuario
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findById);                          //buscar o usuario por id. nesse caso :id é a representaçao por id
route.patch("/:id", validId, validUser, userController.update);

module.exports = route;  //exportanto a rota para ser usada no módulo index


/*ANOTAÇÕES
 o navegador por padrão faz get, então para testar o método post, para mandar alguma coisa no body
pode ser usado três ferramentas principais: POSTMAN, TUNDERCLAIT E INSOMNIA.*/