import { Router } from 'express';
const router = Router();

import {create, findAll} from "../controllers/news.controller.js";
import { authMiddleware } from '../middlewares/auth.middlewares.js';

router.post("/", authMiddleware, create) //cria uma nova noticia
router.get("/", findAll) // para pegar todos

export default router;

