import express, { Express } from "express"

// import and load enviroment variables
import "dotenv/config"

// import chalk from "chalk"

const app: Express = express()


app.use(express.json())

app.listen(process.env.PORT)

