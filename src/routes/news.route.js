import { Router } from 'express';
const router = Router();

import {create, findAll} from "../controllers/news.controller.js"

router.post("/", create) //cria uma nova noticia
router.get("/", findAll) // para pegar todos

export default router;

