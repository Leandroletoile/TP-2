import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Car = {

    getAllCars: async () => {
        const cars = await prisma.car.findMany()
        return cars
    },
    getOneCar: async (id) => {
        const car = await prisma.car.findUnique({
            where: {
                id: id
            }
        })
        return car
    },
    createCar: async (car) => {
        const newCar = await prisma.car.create({
            data: car
        })
        return newCar
    },
    updateCar: async (id, car) => {
        const updatedCar = await prisma.car.update({
            where: {
                id: id
            },
            data: car
        })
        return updatedCar
    },
    deleteCar: async (id) => {
        const deletedCar = await prisma.car.delete({
            where: {
                id: id
            }
        })
        return deletedCar
    }

}


export default Car 