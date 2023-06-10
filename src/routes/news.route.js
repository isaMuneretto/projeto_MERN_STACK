import { Router } from 'express';
const router = Router();

import {create, findAll, topNews, findById, searchByTitle, byUser, update} from "../controllers/news.controller.js";
import { authMiddleware } from '../middlewares/auth.middlewares.js';

router.post("/", authMiddleware, create); //cria uma nova noticia
router.get("/", findAll); // para pegar todos
router.get("/top", topNews);
router.get("/search", searchByTitle); //busca pelo titulo
router.get("/byUser", authMiddleware, byUser); //consegue pegar o id do usuario pelo token de autenticação
router.get("/:id", authMiddleware, findById); //busca pelo id, somente o id tem autenticação
router.patch("/:id", authMiddleware, update); //atualizar uma noticia

export default router;

