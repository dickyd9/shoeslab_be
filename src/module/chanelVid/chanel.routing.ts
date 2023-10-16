import express from "express"
import { ChanelController } from "./chanel.controller"
// import { checkJwt } from "../../common/middleware/auth"

const router = express.Router()

router.get("/chanel", ChanelController.getChanelData)
router.post("/chanel", ChanelController.addChanel)
// router.put("/product", ProductController.updateProduct)

module.exports = router
