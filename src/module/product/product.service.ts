import { Inteceptor } from "../../common/middleware/response"

const db = require("../../../models")
const Product = db.product

export class ProductService {
  static async getProduct(req: any): Promise<any> {
    const message = "Success get data!"
    return Inteceptor.response(Product, req, message)
  }

  static async addProduct(createProduct: any): Promise<any> {
    const { file, body } = await createProduct

    const originPath = "/assets/images/product/" + file?.filename
    const data = {
      productImage: originPath || "",
      productName: body.productName,
      productPrice: body.productPrice,
      productLink: body.productLink,
    }

    const products = await Product.create(data)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add product",
        data: products,
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
}
