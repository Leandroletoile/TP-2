import Car from "../../models/Car.js";


const CarService = {

    getAllCars: () => {
        const cars = Car.getAllCars();
        return cars;
    },
    getOneCar: (id) => {
        const car = Car.getOneCar(id);
        return car;
    },
    createCar: (car) => {
        const newCar = Car.createCar(car);
        return newCar;
    },
    updateCar: (id, car) => {
        const updatedCar = Car.updateCar(id, car);
        return updatedCar;
    },
    deleteCar: (id) => {
        const deletedCar = Car.deleteCar(id);
        return deletedCar;
    }

}



export default CarService


