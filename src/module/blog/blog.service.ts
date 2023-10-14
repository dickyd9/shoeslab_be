const db = require("../../../models")
const Blog = db.blogs

export class BlogsService {
  static async getBlog(): Promise<any> {
    const blogs = await Blog.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: blogs,
      }
      resolve(data)
    })
  }

  static async addBlog(createBlog: any): Promise<any> {
    const blogs = await Blog.create(createBlog)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add product",
        data: blogs,
      }
      resolve(data)
    })
  }

  static updateProduct(): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = { message: "Ini update product" }
      resolve(data)
    })
  }

  static async deleteBlog(req: any): Promise<any> {
    await Blog.destroy({
      where: {
        id: req.params.id
      }
    })
    return new Promise((resolve, reject) => {
      const data = { message: "Data deleted!" }
      resolve(data)
    })
  }
}
