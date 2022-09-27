import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const User = {
    getAllUsers: async () => {
        const users = await prisma.user.findMany()
        return users
    },
    getUser: async (id) => {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return user
    },
    createUser: async (data) => {
        const user = await prisma.user.create({
            data: data
        })
        return user
    },
    updateUser: async (id, data) => {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: data
        })
        return user
    },
    deleteUser: async (id) => {
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        })
        return user
    },
    getUserByEmail: async (email) => {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    }
}

export default User