/*const router = require('express').Router(); (common JS)
const userController = require('../controllers/user.controller'); */

import express from 'express';
 //cria rotas fora do arquivo principal
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";

const router = express.Router();

router.post("/", userController.create);  //a função de callback vai ficar desmembrada dentro de controllers. //requisição post criando um novo usuario
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById); //buscar o usuario por id. nesse caso :id é a representaçao por id
router.patch("/:id", validId, validUser, userController.update);

//exportanto a rota para ser usada no módulo index
//module.exports = route; (common JS)

export default router;

/*ANOTAÇÕES
 o navegador por padrão faz get, então para testar o método post, para mandar alguma coisa no body
pode ser usado três ferramentas principais: POSTMAN, TUNDERCLAIT E INSOMNIA.
Sobre os DEFAULTS: quando é somente export, consegue importar desconstruido e quando é export default
eu não consigo importar desconstruido
*/