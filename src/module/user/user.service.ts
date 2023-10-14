import { validate } from "class-validator"
import jwt from "jsonwebtoken"
const bcrypt = require("bcryptjs")
const db = require("../../../models")
const User = db.user

export class UserService {
  static listAll = async (req: Request, res: Response) => {
    //Get users from database
    const user = User.findAll(User)
    // const users = await userRepository.find({
    //   select: ["id", "username", "role"], //We dont want to send the passwords on response
    // })
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: user,
      }
      resolve(data)
    })
  }

  static async newUser(createUser: any): Promise<any> {
    const users = await User.create(createUser)
    // Validade if the parameters are ok
    const errors = await validate(user)
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
