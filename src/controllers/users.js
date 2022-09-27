import UserService from '../services/User/index.js'
import { generateHash } from "../utils/hash.js"

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
}

const getOneUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getOneUser(id);
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const newUser = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: generateHash(req.body.password),
    }

    const user = await UserService.createUser(newUser);
    res.status(201).json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.updateUser(id, req.body);
    res.status(200).json(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserService.deleteUser(id);
    res.status(204).json();
}

export { getAllUsers, createUser, getOneUser, updateUser, deleteUser };