import User from "../../../sequelize/models/User";

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
}

export default {
    getAllUsers
}