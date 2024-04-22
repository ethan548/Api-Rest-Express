import { Router } from "express";
import { singIn, singUp } from "../controllers/authControllers.js";
import {checkRolesExisted, checkUserAndEmail} from "../middlewares/authJsonWebTokens.js";

const router = Router();
router.post('/signin', singIn)
router.post('/singup',checkRolesExisted, checkUserAndEmail, singUp)

export default router
