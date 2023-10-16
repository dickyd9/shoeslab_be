import { Request, Response } from "express"
import { UserService } from "./user.service"

export class UserController {
  static createUser = async (req: Request, res: Response) => {
    const create = req.body
    try {
      const data = await UserService.newUser(create)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }

  static getUser = async (req: Request, res: Response) => {
    try {
      const data = await UserService.getUser(req)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }

  static getAllUser = async (req: Request, res: Response) => {
    try {
      const data = await UserService.listAll(req)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
  }
}
