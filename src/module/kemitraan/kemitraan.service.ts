const db = require("../../../models")
const Kemitraan = db.paketUsaha

export class KemitraanService {
  static async getDataKemitraan(): Promise<any> {
    const kemitraan = await Kemitraan.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: kemitraan,
      }
      resolve(data)
    })
  }

  static async addKemitraan(createKemitraan: any): Promise<any> {
    const kemitraan = await Kemitraan.create(createKemitraan)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add product",
        data: kemitraan,
      }
      resolve(data)
    })
  }

  // static updateProduct(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const data = { message: "Ini update product" }
  //     resolve(data)
  //   })
  // }
}
