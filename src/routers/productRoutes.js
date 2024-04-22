import { Router } from "express";
import * as productController from "../controllers/productControllers.js"
import { authToken, authAdmin } from "../middlewares/authJsonWebTokens.js";
const router = Router();

router.get('/', productController.getProducts)
router.post('/',authToken,authAdmin, productController.createProduct)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)
export default router