import { Router } from "express";
import { checkLoggedIn, checkAdmin, checkLoggedUser } from '../middlewares/jwt.js'
import { getAllCars, createCar, deleteCar, getOneCar, updateCar } from "../controllers/cars.js";

const router = Router();

router
    .get("/", getAllCars)
    .get("/:id", getOneCar)
    .post("/", createCar)
    .put("/:id", updateCar)
    .delete("/:id", [checkAdmin], deleteCar);

export default router