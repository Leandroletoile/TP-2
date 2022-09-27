import User from "../../models/User.js";

const UserService = {
    getAllUsers: () => {
        const users = User.getAllUsers();
        return users;
    },
    getOneUser: (id) => {
        const user = User.getOneUser(id);
        return user;
    },
    createUser: (user) => {
        const newUser = User.createUser(user);
        return newUser;
    },
    updateUser: (id, user) => {
        const updatedUser = User.updateUser(id, user);
        return updatedUser;
    },
    deleteUser: (id) => {
        const deletedUser = User.deleteUser(id);
        return deletedUser;
    }
}

export default UserService


