import { Router } from "express";
import * as userController from "../controllers/userControllers.js";
import { authToken, authAdmin } from "../middlewares/authJsonWebTokens.js";
const router = Router();

router.get("/", authToken, authAdmin, userController.getUsers);
/*
router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", authToken, userController.getUserProfile);
router.put("/profile", authToken, userController.updateUserProfile);
router.delete("/:id", authToken, authAdmin, userController.deleteUser);
*/

export default router;
