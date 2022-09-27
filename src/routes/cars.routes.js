import { Router } from "express";

import { getAllCars, createCar, deleteCar, getOneCar, updateCar } from "../controllers/cars.js";

const router = Router();

router
    .get("/", getAllCars)
    .get("/:id", getOneCar)
    .post("/", createCar)
    .put("/:id", updateCar)
    .delete("/:id", deleteCar);

export default router