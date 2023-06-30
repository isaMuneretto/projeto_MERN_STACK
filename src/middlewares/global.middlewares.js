//middlewares são funcoes de interceptacao da chamada entre a rota e a funcao de callback (ir em user.route)

import mongoose from "mongoose";  //testa o id
import userService from "../services/user.sevice.js"; //testa se o usuario existe, buscando ele no servidor/bd (Service). 

export const validId = (req, res, next) => {  //1ª funcao.valida o id. aqui ja está exportando tbm 
   try {const id = req.params.id //recebe atraves de um parametro o id

    if (!mongoose.Types.ObjectId.isValid(id)) {   // se o id não for valido
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
} catch (err) {
    res.status(500).send({ message: err.message }); 
}
};

export const validUser = async (req, res, next) => { //valida o usuario
    
    try {
        const id = req.params.id; //para saber qual o usuario, tem que buscar pelo id

        const user = await userService.findByIdService(id);  //busca no BD, tem que esperar. Se aqui espera, a função globar precisa ser assincrona

        if (!user) {  //verifica se tem algum usuario
            return res.status(400).send({ message: "User not found" });
        }

        req.id = id;
        req.user = user;

        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

