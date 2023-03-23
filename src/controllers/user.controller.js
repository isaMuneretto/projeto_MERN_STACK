/*ANOTAÇÕES
*arquivo separado
 *recebemos os dados do usuario atraves de um formulário. A requisição pode receber algumas coisas não só acesso a rota, como por exemplo um body(JSon)*/

const create = (req, res) => {     //controller controla requisição e resposta
    const {name, username, email, password, avatar, background} = req.body;  //recebe o corpo da requisição e desmembra o objeto e faz com que cada item se transforme em uma variavel para validar elas individualmente
  
    if(!name || !username || !email || !password || !avatar || !background) {  //o if serve para que seja testado antes de fazer processar o servidor a toa
        res.status(400).send({message: "Submit all fields for registration"})
    }

    //res.json("Ok")  //recebe arquivos json
    res.status(201).send ({
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            background,
        },
    });
};

module.exports = { create };   //função module exports em sua maioria exporta um objeto
