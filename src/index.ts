import express, { Express } from "express"
import authControler from "./controllers/authControler"
import userControler from "./controllers/userControler"
import postControler from "./controllers/postControler"

// import and load enviroment variables
import "dotenv/config"

const app: Express = express()

app.use("/auth", authControler)
app.use("/user", userControler)
app.use("/post", postControler)

app.listen(process.env.PORT, (): void => console.log(`See you at http::localhost:${process.env.PORT}`))

