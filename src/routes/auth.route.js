import { Router } from "express";
const router  = Router();

import { login } from "../controllers/auth.controller.js";
//rota de post porque a autenticacao é feita atraves de POST

router.post("/", login);

export default router;