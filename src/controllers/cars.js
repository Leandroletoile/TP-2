import CarService from '../services/Car/index.js';

const getAllCars = async (req, res) => {
    const cars = await CarService.getAllCars();
    res.status(200).json(cars);
}

const createCar = async (req, res) => {
    const car = await CarService.createCar(req.body);
    res.status(201).json(car);
}

const getOneCar = async (req, res) => {
    const car = await CarService.getOneCar(Number(req.params.id));
    res.status(200).json(car);
}

const updateCar = async (req, res) => {
    const car = await CarService.updateCar(Number(req.params.id), req.body);
    res.status(200).json(car);
}

const deleteCar = async (req, res) => {
    const car = await CarService.deleteCar(Number(req.params.id));
    res.status(200).json(car);
}

export {
    getAllCars,
    createCar,
    getOneCar,
    updateCar,
    deleteCar
}