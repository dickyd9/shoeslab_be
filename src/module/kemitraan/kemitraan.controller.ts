import { Request, Response } from "express"
import { KemitraanService } from "./kemitraan.service"

export class KemitraanController {
  static async getKemitraanData(req: Request, res: Response) {
    try {
      const data = await KemitraanService.getDataKemitraan()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data" })
    }
  }

  static async addKemitraan(req: Request, res: Response) {
    const createKemitraan = req.body
    try {
      const data = await KemitraanService.addKemitraan(createKemitraan)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error })
    }
  }

  // static async updateProduct(req: Request, res: Response) {
  //   try {
  //     const data = await KemitraanService.updateProduct()
  //     res.json(data)
  //   } catch (error) {
  //     console.error("Terjadi kesalahan:", error)
  //     res
  //       .status(500)
  //       .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
  //   }
  // }
}
