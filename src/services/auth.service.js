//comunicacao com o banco de dados atraves da model.user

import User from '../models/User.js';
import jwt from "jsonwebtoken";

//o User vai fazer uma busca (findOne) com o filtro de pesquisa que fica dentro das chaves
const loginService = (email) => User.findOne({ email: email }).select("+password"); //o select +password é para mostrar a senha mas ela é oculta, esta na model select false
/*criacao do token: composto por tres itens que é o sign(usuario), chave MD5 hash subst. por process.env.. e tempo de duracao do token(expiresIn)*/ 
const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400}); 

export { loginService, generateToken };