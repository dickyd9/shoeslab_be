import { Request, Response } from "express"
import { ChanelService } from "./chanel.service"

export class ChanelController {
  static async getChanelData(req: Request, res: Response) {
    try {
      const data = await ChanelService.getChanel()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
    }
  }

  static async addChanel(req: Request, res: Response) {
    const Chanel = req.body
    try {
      const data = await ChanelService.addChanel(Chanel)
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
