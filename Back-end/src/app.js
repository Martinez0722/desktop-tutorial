import express from "express";
import database from "./config/database.js";
import dotenv from "dotenv-safe";
import authRouter from "./routes/authRouter.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth',authRouter);

dotenv.config()

database.on("open", () => console.log("Conexão com o MongoDB feita com sucesso!"));
database.on("error", () => console.log("Conexão com o MongoDB quebrada! Houve um erro"))

export default app;