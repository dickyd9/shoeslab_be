import express from "express"
import { TestimoniController } from "./testi.controller"
// import { checkJwt } from "../../common/middleware/auth"

const router = express.Router()

router.get("/testimoni", TestimoniController.getTestimoniData)
router.post("/testimoni", TestimoniController.addTestimoni)
// router.put("/product", ProductController.updateProduct)

module.exports = router
