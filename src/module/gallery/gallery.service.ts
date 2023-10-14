const db = require("../../../models")
const Gallery = db.gallery
const fs = require("fs")
const path = require("path")

export class GalleryService {
  static async getDataGallery(req: any, res: any): Promise<any> {
    const gallery = await Gallery.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: gallery,
      }
      resolve(data)
    })
  }

  static async showImage(req: any, res: any): Promise<any> {
    const image = req.params.name
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: image,
      }
      resolve(data)
    })
  }

  static async addGallery(createGallery: any): Promise<any> {

    if (createGallery.file == undefined) {
      return createGallery.send(`You must select a file.`)
    }

    const { file, body } = await createGallery
    const originPath = '/assets/images/' + file.filename
    const data = {
      title: body.title,
      path: originPath,
      link: file.filename,
    }

    const gallery = await Gallery.create(data)

    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add image",
        data: gallery,
      }
      resolve(data)
    })
  }
}
