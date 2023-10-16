import express from "express"
import { UserController } from "./user.controller"
import { checkJwt } from "../../common/middleware/auth"

const router = express.Router()

router.get("/user", checkJwt, UserController.getUser)
router.get("/user-list", UserController.getAllUser)
router.post("/signUp", UserController.createUser)
// router.put("/product", ProductController.updateProduct)

module.exports = router
