"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControler_1 = __importDefault(require("./controllers/authControler"));
const userControler_1 = __importDefault(require("./controllers/userControler"));
const postControler_1 = __importDefault(require("./controllers/postControler"));
// import and load enviroment variables
require("dotenv/config");
const app = (0, express_1.default)();
app.use("/auth", authControler_1.default);
app.use("/user", userControler_1.default);
app.use("/post", postControler_1.default);
app.listen(process.env.PORT, () => console.log(`See you at http::localhost:${process.env.PORT}`));
