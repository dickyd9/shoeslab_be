import ExpressConfig from "../express.config"

const app = ExpressConfig()
const PORT = process.env.PORT || 5000

const productRoutes = require('./module/router');

// Route
app.use('/v1', productRoutes);

app.listen(PORT, () => {
  console.log(`Running`)
})
