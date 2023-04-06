//middlewares são funcoes de interceptacao da chamada entre a rota e a funcao de callback (ir em user.route)

const mongoose = require("mongoose");  //testa o id
const userService = require("../services/user.sevice") //testa se o usuario existe, buscando ele no servidor (Service)

const validId = (req, res, next) => {  //1ª funcao
   try {const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {   // se o id não for valido
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
} catch (err) {
    res.status(500).send({ message: err.message }); //se nao der(try) mostra a mensagem 
}
};

const validUser = async (req, res, next) => {
    
    try {
        const id = req.params.id;

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
module.exports = { validId, validUser };
