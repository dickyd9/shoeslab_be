import { Request, Response, NextFunction } from "express"
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    const path = req.path
    const dir = `./assets/images${path}`

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    cb(null, dir)
  },
  filename: (req: Request, file: any, cb: any) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

export const upload = multer({ storage: storage })
