import express from "express"
import { BlogController } from "./blog.controller"

const router = express.Router()

router.get("/blog", BlogController.getBlog)
router.post("/blog", BlogController.addBlog)
// router.put("/blog", ProductController.updateProduct)
router.delete("/blog/:id", BlogController.deleteBlog)

module.exports = router
