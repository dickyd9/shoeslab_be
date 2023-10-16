import { Inteceptor } from "../../common/middleware/response"

const db = require("../../../models")
const Blog = db.blogs

export class BlogsService {
  static getBlog(req: any): Promise<any> {
    const message = "Success get data!"
    return Inteceptor.response(Blog, req, message)
  }

  static async getBlogDetail(req: any): Promise<any> {
    const blogs = await Blog.findOne({ where: { id: req.params.id } })
    return new Promise((resolve, reject) => {
      const data = blogs
      resolve(data)
    })
  }

  static async addBlog(createBlog: any): Promise<any> {
    const { file, body } = await createBlog
    const originPath = "/assets/images/blog/" + file?.filename
    const data = {
      blogImage: originPath || "",
      blogTitle: body.blogTitle,
      blogDesc: body.blogDesc,
      blogStatus: body.blogStatus,
    }
    const blogs = await Blog.create(data)
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
        id: req.params.id,
      },
    })
    return new Promise((resolve, reject) => {
      const data = { message: "Data deleted!" }
      resolve(data)
    })
  }
}
