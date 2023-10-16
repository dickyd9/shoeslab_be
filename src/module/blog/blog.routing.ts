import express from "express"
import { BlogController } from "./blog.controller"
import { upload } from "../../common/middleware/uploadFile"

const router = express.Router()

router.get("/blog", BlogController.getBlog)
router.get("/blog/:id", BlogController.getBlogDetail)
router.post("/blog", upload.single("blogImage"), BlogController.addBlog)
// router.put("/blog", ProductController.updateProduct)
router.delete("/blog/:id", BlogController.deleteBlog)

module.exports = router
