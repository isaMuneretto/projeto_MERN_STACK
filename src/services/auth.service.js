//comunicacao com o banco de dados atraves da model.user

import User from '../models/User.js';
//o User vai fazer uma busca (findOne) com o filtro de pesquisa que fica dentro das chaves
const loginService = (email) => User.findOne({ email: email }).select("+password"); //o select +password é para mostrar a senha mas ela é oculta, esta na model select false

export { loginService };