const express = require("express")
const router = express.Router()

const auth = require("./auth/auth.routing")
const user = require("./user/user.routing")
const product = require("./product/product.routing")
const blog = require("./blog/blog.routing")
const testimoni = require("./testimoni/testi.routing")
const kemitraan = require("./kemitraan/kemitraan.routing")
const gallery = require("./gallery/gallery.routing")

router.use(auth)
router.use(user)
router.use(product)
router.use(blog)
router.use(testimoni)
router.use(kemitraan)
router.use(gallery)

module.exports = router
