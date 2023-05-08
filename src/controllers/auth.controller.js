import bcrypt from 'bcrypt';
import { generateToken, loginService } from '../services/auth.service.js';

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginService(email); //busca o email no banco de dados

        if(!user){
            return res.status(404).send({message: "User or password not found"}) 
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password); 

        if(!passwordIsValid){
            return res.status(404).send({message: "User or password not found"})
        }

        const token = generateToken(user.id) //nao precisa ser async e await pq la no service ele vai fazer de forma sincrona a geracao do token

        res.send({token}); //envia para o cliente o token
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export { login };