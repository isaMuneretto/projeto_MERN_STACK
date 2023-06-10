/*ANOTAÇÕES
*arquivo separado
 *recebemos os dados do usuario atraves de um formulário. A requisição pode receber algumas coisas não só acesso a rota, como por exemplo um body(JSon)*/

import userService from "../services/user.sevice.js";

//usado try/catch como boa pratica para dar uma resposta para o cliente caso nao execute com sucesso

const create = async (req, res) => {     //controller controla requisição e resposta
    try {
        const { name, username, email, password, avatar, background } = req.body;  //recebe o corpo da requisição e desmembra o objeto e faz com que cada item se transforme em uma variavel para validar elas individualmente

        if (!name || !username || !email || !password || !avatar || !background) {  //o if serve para que seja testado antes de fazer processar o servidor a toa
            res.status(400).send({ message: "Submit all fields for registration" })
        }

        //antes de responder (res.status) para o meu usuario eu posso cadastrar e enviar
        const user = await userService.createService(req.body); //await é para esperar executar userService.create(req.body) para continuar

        //verifica o user de cima
        if (!user) {
            return res.status(400).send({ message: "Error creating User" });
        }

        //recebe arquivos json. Resposta para o usuário
        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findAll = async (req, res) => {  //é assincrono porque vai consultar no banco de dados que é um código que vai executar fora do nosso código
    try {
        const users = await userService.findAllService();  //não passa nenhum parâmetro porque já vai retornar os dados que vai ser buscado. Esse findAll não é o mesmo de cima que é do controller                                       //para buscar os usuarios precisa armazenar em uma variavel

        if (users.length === 0) {  //verifica se está recebendo todos os usuarios
            return res.status(400).send({ message: "There are no registered users" })
        }

        res.send(users)//manda resposta para o cliente
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findById = async (req, res) => {
    /*if(!mongoose.Types.ObjectId.isValid(id)){    se o id não for valido
        return res.status(400).send({message: "Invalid ID"});
    }/* 
    
    const user = await userService.findByIdService(id)  //busca efetivamente o usuario. Acessa o bd pelo service. substituido pela funcao de baixo */

    const user = req.user;
    res.send(user);
};

const update = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;  //recebe o corpo da requisição e desmembra o objeto e faz com que cada item se transforme em uma variavel para validar elas individualmente

    if (!name && !username && !email && !password && !avatar && !background) {  //o if serve para que seja testado antes de fazer processar o servidor a toa
        res.status(400).send({ message: "Submit at least one field for update" })
    }

    const { id, user } = req;

    /* substituido 
    if(!mongoose.Types.ObjectId.isValid(id)){   // se o id não for valido
        return res.status(400).send({message: "Invalid ID"});}
    const user = await userService.findByIdService(id); 
     if (!user) {  //verifica se tem algum usuario
        return res.status(400).send({message: "User not found"});
    }*/

    await userService.updateService( //atualizar
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({ message: "User successfully updated!" });
};

//module.exports = { create, findAll, findById, update }; (common JS)  
//função module exports em sua maioria exporta um objeto

export default { create, findAll, findById, update };
