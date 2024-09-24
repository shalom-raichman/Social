import express from "express";
// import and load enviroment variables
import "dotenv/config";
// import chalk from "chalk"
const app = express();
app.use(express.json());
app.listen(process.env.PORT);
