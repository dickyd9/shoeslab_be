import compression from "compression"
import cookieParser from "cookie-parser"

const serverless = require('serverless-http')

import express, { Application } from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"

import mysql from "mysql2"
import dotenv from "dotenv"

import "./models/index.js"

const sequelize = require("./config/config.js")

dotenv.config()

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect((err) => {
  if (err) {
    console.error("Gagal terhubung ke MySQL:", err)
  } else {
    console.log("Berhasil terhubung ke MySQL")
  }
})

const ExpressConfig = (): Application => {
  const app = express()
  const allowedOrigins = '*'

  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  }

  app.use(cors(options))
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use("/assets", express.static(__dirname + "/assets"))

  app.use(helmet())
  app.use(cookieParser())
  app.use(morgan("dev"))

  return app
}
export default ExpressConfig
