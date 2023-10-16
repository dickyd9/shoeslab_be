import { Request, Response, NextFunction } from "express"

export class Inteceptor {
  static async response(model: any, req: any, message: any) {
    const page = parseInt(req.query.page as string, 10) || 1
    const pageSize = parseInt(req.query.pageSize as string, 10) || 10
    const offset = (page - 1) * pageSize

    if (req.url === '/user-list') {
      const datas = await model.findAll({
        attributes: [
          "fullname",
          "address",
          "email",
          "is_email_verified",
          "createdAt",
        ],
        // limit: pageSize,
        // offset: offset,
      })
      const total = await model.count()
      const totalPages = Math.ceil(total / pageSize)

      return new Promise((resolve, reject) => {
        const data = {
          message: message,
          data: datas,
          meta: {
            totalData: total,
            limit: pageSize,
            page: offset,
            totalPages,
          },
        }
        resolve(data)
      })
    } else {
      const datas = await model.findAll({
        limit: pageSize,
        offset: offset,
      })
      const total = await model.count()
      const totalPages = Math.ceil(total / pageSize)

      return new Promise((resolve, reject) => {
        const data = {
          message: message,
          data: datas,
          meta: {
            totalData: total,
            limit: pageSize,
            page: offset,
            totalPages,
          },
        }
        resolve(data)
      })
    }
  }

  static errorHandler(err: any, res: Response) {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    } else {
      res.status(500).json({ message: "Terjadi kesalahan dalam server" })
    }
  }
}
