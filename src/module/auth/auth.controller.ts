import { Request, Response } from "express"
import { AuthService } from "./auth.service"

export class AuthController {
  static login = async (req: Request, res: Response) => {
    const login = req.body
    try {
      const data = await AuthService.login(login, res)
      res.json(data)
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      res.status(500).json({ error })
    }
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
  //     user = await userRepository.findOneOrFail(id)
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
  //   userRepository.save(user)

  //   res.status(204).send()
  // }
}
