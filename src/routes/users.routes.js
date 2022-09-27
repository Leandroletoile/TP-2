import { Router } from "express"
import { getAllUsers, createUser, getOneUser, updateUser, deleteUser }  from "../controllers/users.js"
import { checkLoggedIn , checkAdmin , checkLoggedUser } from '../middlewares/jwt.js'


const router = Router()

router
    .get("/", getAllUsers)
    .post("/", createUser)
    .get("/:id", getOneUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)

export default router