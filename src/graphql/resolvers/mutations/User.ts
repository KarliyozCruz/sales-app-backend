import User from "../../../sequelize/models/User";


const addUser = async ({user}: {user: User}) => {
    console.log(user);
    const newUser = await User.create(user)
    return newUser;
}

export default {
    addUser
}