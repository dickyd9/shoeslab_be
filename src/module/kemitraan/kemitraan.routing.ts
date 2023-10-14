import express from "express"
import { KemitraanController } from "./kemitraan.controller"
// import { checkJwt } from "../../common/middleware/auth"

const router = express.Router()

router.get("/kemitraan", KemitraanController.getKemitraanData)
router.post("/kemitraan", KemitraanController.addKemitraan)
// router.put("/product", ProductController.updateProduct)

module.exports = router
