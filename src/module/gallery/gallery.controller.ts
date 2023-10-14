import { Request, Response } from "express"
import { GalleryService } from "./gallery.service"

export class GalleryController {
  static async getGallery(req: Request, res: Response) {
    try {
      const data = await GalleryService.getDataGallery(req, res)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data" })
    }
  }

  static async showImage(req: Request, res: Response) {
    try {
      const data = await GalleryService.showImage(req, res)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data" })
    }
  }

  static async addGallery(req: Request, res: Response) {
    try {
      const data = await GalleryService.addGallery(req)
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
