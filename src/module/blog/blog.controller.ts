import { Request, Response } from "express"
import { BlogsService } from "./blog.service"

export class BlogController {
  static async getBlog(req: Request, res: Response) {
    try {
      const data = await BlogsService.getBlog()
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
    }
  }

  static async addBlog(req: Request, res: Response) {
    const createBlog = req.body
    try {
      const data = await BlogsService.addBlog(createBlog)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }

  static async deleteBlog(req: Request, res: Response) {
    try {
      const data = await BlogsService.deleteBlog(req)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }
}
