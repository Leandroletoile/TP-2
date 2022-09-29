import express from "express"
import dotenv from 'dotenv'
import morgan from "morgan"
import usersRoute from "./routes/users.routes.js"
import carsRoute from './routes/cars.routes.js'
import loginRouter from "./routes/login.js"
import registerRouter from "./routes/register.js"
import "./auth/auth.js"
import { errorLogger, errorParser, notFound } from "./middlewares/errorHandler.js"


export const app = express()
export const PORT = process.env.PORT || 3000


dotenv.config()
app.use(morgan('dev'))
app.use(express.json())


app.use("/users", usersRoute)
app.use("/cars", carsRoute)
app.use("/login", loginRouter)
app.use("/register", registerRouter)


app.get("/", (req, res) => {
    res.send("<h1>Página de Lean :)</h1>").end()
})

app.get("*", (req, res, next) => {
    res.status(302).redirect("/")
})

app.use([notFound, errorLogger, errorParser])


