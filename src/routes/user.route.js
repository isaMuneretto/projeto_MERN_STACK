const route = require('express').Router(); //cria rotas fora do arquivo principal
const userController = require('../controllers/user.controller');

route.post("/", userController.create);  //a função de callback vai ficar desmembrada dentro de controllers. //requisição post com user é pq está criando um novo usuario

module.exports = route;  //exportanto a rota para ser usada no módulo index



/*ANOTAÇÕES
 o navegador por padrão faz get, então para testar o método post, para mandar alguma coisa no body
pode ser usado três ferramentas principais: POSTMAN, TUNDERCLAIT E INSOMNIA.*/