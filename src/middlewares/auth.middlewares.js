import dotenv from 'dotenv';
import userSevice from '../services/user.sevice.js';
import jwt from "jsonwebtoken";

dotenv.config();
//exporta a constante ao inves de fazer os dois separados
export const authMiddleware = (req, res, next) => {
    try {
        //verificar se tem token
        const { authorization } = req.headers;

        if (!authorization) {
            return res.send(401);
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            return res.send(401);
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.send(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token Invalid!" });
            }

            const user = await userSevice.findByIdUserService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid Token!" });
            }

            req.userId = user.id;
            return next();
        });


    } catch (err) {
        res.status(500).send(err.message);
    }
};