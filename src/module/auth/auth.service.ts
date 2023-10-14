const db = require("../../../models")
const User = db.user
import dotenv from "dotenv"

const bcrypt = require("bcrypt")

import * as jwt from "jsonwebtoken"
import { validate } from "class-validator"
dotenv.config()

export class AuthService {
  static login = async (login: any, res: any) => {
    //Check if username and password are set
    try {
      let { email, password } = login
      if (!(email && password)) {
        res.status(400).send()
      }

      const user = await User.findOne({ where: { email: email } })

      if (user) {
        const password_valid = await bcrypt.compare(password, user.password)
        if (password_valid) {
          let secret = process.env.JWT_SECRET as string
          const token = jwt.sign(
            { userId: user.id, email: user.email },
            secret,
            {
              expiresIn: "10000",
            }
          )

          // //Send the jwt in the response
          res.send({
            auth: token,
          })
        } else {
          res.status(400).send({ error: "Password Incorrect" })
        }
      } else {
        res.status(404).send({ error: "User does not exist" })
      }
    } catch (error) {
      res.status(404).send({ error: "Error" })
    }
    // try {
    //   //Sing JWT, valid for 1 hour
    // } catch (error) {
    //   res.status(401).send()
    // }

    //Check if encrypted password match
    // if (!user.checkIfUnencryptedPasswordIsValid(password)) {
    //   res.status(401).send()
    //   return
    // }
  }

  static authenticateUserWithemail = async (login: any, res: any) => {
    return new Promise((resolve, reject) => {
      try {
        User.findOne({
          where: {
            email: login.email, // user email
          },
        }).then(async (res: any) => {
          if (!res) {
            resolve(false)
          } else {
            if (
              !res.dataValues.password ||
              !(await res.validPassword(user.password, res.dataValues.password))
            ) {
              resolve(false)
            } else {
              resolve(res.dataValues)
            }
          }
        })
      } catch (error) {
        const response = {
          status: 500,
          data: {},
          error: {
            message: "user match failed",
          },
        }
        reject(response)
      }
    })
  }

  // static changePassword = async (req: Request, res: Response) => {
  //   //Get ID from JWT
  //   const id = res.locals.jwtPayload.userId

  //   //Get parameters from the body
  //   const { oldPassword, newPassword } = req.body
  //   if (!(oldPassword && newPassword)) {
  //     res.status(400).send()
  //   }

  //   //Get user from the database
  //   let user: typeof User
  //   try {
  //     user = await User.findAll(id)
  //   } catch (id) {
  //     res.status(401).send()
  //   }

  //   //Check if old password matchs
  //   if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
  //     res.status(401).send()
  //     return
  //   }

  //   //Validate de model (password lenght)
  //   user.password = newPassword
  //   const errors = await validate(user)
  //   if (errors.length > 0) {
  //     res.status(400).send(errors)
  //     return
  //   }
  //   //Hash the new password and save
  //   user.hashPassword()
  //   await User.update(user)

  //   res.status(204).send()
  // }
}
