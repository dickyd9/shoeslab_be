import { validate } from "class-validator"
import jwt from "jsonwebtoken"
import { Inteceptor } from "../../common/middleware/response"
const bcrypt = require("bcryptjs")
const db = require("../../../models")
const User = db.users

export class UserService {
  static listAll = async (req: any) => {
    const message = "Success get data!"
    return Inteceptor.response(User, req, message)
    //   const user = await User.findAll({
    //     attributes: ["fullname", "address", "email", "is_email_verified", "createdAt"],
    //   })
    //   return new Promise((resolve, reject) => {
    //     const data = {
    //       message: "Data get success!",
    //       data: user,
    //     }
    //     resolve(data)
    //   })
  }

  static async newUser(createUser: any): Promise<any> {
    const users = await User.create(createUser)
    // Validade if the parameters are ok
    const errors = await validate(users)
    if (errors.length > 0) {
      console.log(errors)
      // res.status(400).send(errors)
      return
    }
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add user",
        data: users,
      }
      resolve(data)
    })
  }

  static async getUser(req: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = req.body.user
      resolve(data)
    })
  }
}
