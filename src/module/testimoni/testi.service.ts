const db = require("../../../models")
const Testimoni = db.testimoni

export class TestimoniService {
  static async getTestimoni(): Promise<any> {
    const testimoni = await Testimoni.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: testimoni,
      }
      resolve(data)
    })
  }

  static async addTestimoni(createTestimoni: any): Promise<any> {
    const testimoni = await Testimoni.create(createTestimoni)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add testimoni",
        data: testimoni,
      }
      resolve(data)
    })
  }
}
