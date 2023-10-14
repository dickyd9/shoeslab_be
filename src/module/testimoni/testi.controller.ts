import { Request, Response } from "express"
import { TestimoniService } from "./testi.service"

export class TestimoniController {
  static async getTestimoniData(req: Request, res: Response) {
    try {
      const data = await TestimoniService.getTestimoni()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
    }
  }

  static async addTestimoni(req: Request, res: Response) {
    const testimoni = req.body
    try {
      const data = await TestimoniService.addTestimoni(testimoni)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }

  // static async updateProduct(req: Request, res: Response) {
  //   try {
  //     const data = await TestimoniService.updateProduct()
  //     res.json(data)
  //   } catch (error) {
  //     console.error("Terjadi kesalahan:", error)
  //     res
  //       .status(500)
  //       .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
  //   }
  // }
}
