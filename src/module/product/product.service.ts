const db = require("../../../models")
const Product = db.product

export class ProductService {
  static async getProduct(): Promise<any> {
    const products = await Product.findAll()
    return new Promise((resolve, reject) => {
      const data = {
        message: "Data get success!",
        data: products,
      }
      resolve(data)
    })
  }

  static async addProduct(createProduct: any): Promise<any> {
    const { file, body } = await createProduct

    const originPath = "/assets/images/product/" + file?.filename
    const data = {
      productImage: originPath || '',
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
