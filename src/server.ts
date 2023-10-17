import ExpressConfig from "../express.config"
import { Inteceptor } from "./common/middleware/response"
import { APIGatewayEvent, Context } from "aws-lambda"

const app = ExpressConfig()
const PORT = process.env.PORT || 5000

const serverless = require("serverless-http")
const productRoutes = require("./src/module/router")

// Route
app.use("/.netlify/functions/api", productRoutes)
app.use(Inteceptor.response)
app.use(Inteceptor.errorHandler)

app.listen(PORT, () => {
  console.log(`Server is Fire at ${PORT}`)
})

export const handler = async (event: APIGatewayEvent, context: Context) => {
  const result = await serverless(app)(event, context)
  return result
}
