import UserService from '../services/User/index.js'
import { generateHash } from "../utils/hash.js"



const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        return next(error);
    }
}

const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserService.getOneUser(Number(id));
        res.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        if (!req.body.password) { res.status(400).send({ ok: false, message: "Empty password" }); }
        const newUser = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: generateHash(req.body.password),
        }
        const user = await UserService.createUser(newUser);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send({ ok: false, message: "Invalid data" });
        return next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserService.updateUser(Number(id), req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send({ ok: false, message: "Invalid data" });
        return next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(Number(id));
        res.status(204).json(user)
    } catch (error) {
        return next(error);
    }
}

export {
    getAllUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser
}