import express from "express"
import { GalleryController } from "./gallery.controller"
import { upload } from "../../common/middleware/uploadFile"

const router = express.Router()

router.get("/gallery", GalleryController.getGallery)
router.get("/gallery/:image", GalleryController.showImage)
router.post("/upload", upload.single('file'), GalleryController.addGallery)
// router.put("/product", ProductController.updateProduct)

module.exports = router
