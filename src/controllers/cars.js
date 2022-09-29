import CarService from '../services/Car/index.js';


const getAllCars = async (req, res, next) => {
    try {
        const cars = await CarService.getAllCars();
        res.status(200).json(cars);
    } catch (error) {
        return next(error);
    }
}

const createCar = async (req, res, next) => {
    try {
        const newCar = {
            name: req.body.name,
            model: req.body.model,
            userId: Number(req.body.userId),
        }
        const car = await CarService.createCar(newCar);
        res.status(201).json(car);
    } catch (error) {
        return next(error);
    }
}

const getOneCar = async (req, res, next) => {
    try {
        const car = await CarService.getOneCar(Number(req.params.id));
        res.status(200).json(car);
    } catch (error) {
        return next(error);
    }
}

const updateCar = async (req, res, next) => {
    try {
        const car = await CarService.updateCar(Number(req.params.id), req.body);
        res.status(200).json(car);
    } catch (error) {
        return next(error);
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const car = await CarService.deleteCar(Number(req.params.id));
        res.status(200).json(car);
    } catch (error) {
        return next(error);
    }
}

export {
    getAllCars,
    createCar,
    getOneCar,
    updateCar,
    deleteCar
}