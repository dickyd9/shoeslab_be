import express from "express"
import { ProductController } from "./product.controller"
import { checkJwt } from "../../common/middleware/auth"
import { upload } from "../../common/middleware/uploadFile"

const router = express.Router()

router.post("/product", upload.single("productImage"), ProductController.addProduct)
// router.get("/product", checkJwt, ProductController.getProductData)
router.get("/product", ProductController.getProductData)
router.put("/product", ProductController.updateProduct)

module.exports = router
