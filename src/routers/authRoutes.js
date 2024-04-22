import { Router } from "express";
import { singIn, singUp } from "../controllers/authControllers.js";

const router = Router();
router.post('/signin', singIn)
router.post('/singup', singUp)

export default router
