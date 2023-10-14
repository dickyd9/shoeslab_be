import { Request, Response } from "express"
import { ProductService } from "./product.service"

export class ProductController {
  static async getProductData(req: Request, res: Response) {
    try {
      const data = await ProductService.getProduct()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
    }
  }

  static async addProduct(req: Request, res: Response) {
    // if (req.body.file == undefined) {
    //   return res.status(400).send(`You must select a file.`)
    // }

    try {
      const data = await ProductService.addProduct(req)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const data = await ProductService.updateProduct()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
    }
  }
}
