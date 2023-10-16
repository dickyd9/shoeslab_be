const db = require("../../../models")
const Chanel = db.video

export class ChanelService {
  static async getChanel(): Promise<any> {
    const chanel = await Chanel.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: chanel,
      }
      resolve(data)
    })
  }

  static async addChanel(createChanel: any): Promise<any> {
    const chanel = await Chanel.create(createChanel)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add Chanel",
        data: chanel,
      }
      resolve(data)
    })
  }
}
