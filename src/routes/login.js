import { Router } from "express"
import jwt from "jsonwebtoken"
import { validatePassword } from "../utils/hash.js"
import { PrismaClient } from "@prisma/client"

const router = Router()
const prisma = new PrismaClient()

router
    .get("/", (req, res) => {
        res.send("Login")
    })
    .post("/", async (req, res) => {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const validPassword = await validatePassword(password, user.password)

        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })

        res.status(200).json({
            message: "Login successful",
            token: token
        })

    })

export default router