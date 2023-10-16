import ExpressConfig from "./express.config"
import { Inteceptor } from "./src/common/middleware/response"
const serverless = require("serverless-http")

const app = ExpressConfig()
const PORT = process.env.PORT || 5000

const productRoutes = require("./src/module/router")

// Route
app.use("/.netlify/functions/api", productRoutes)
app.use(Inteceptor.response)
app.use(Inteceptor.errorHandler)

app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`)
})

module.exports.handler = serverless(app)
