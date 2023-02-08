import User from "../../../sequelize/models/User";
import { updateAndReturn } from "../utils";


const addUser = async ({user}: {user: User}): Promise<User> => {
    return await User.create(user);
}

const updateUser = async ({user}: {user:User}): Promise <User> => {
    return await updateAndReturn<User>(User, user);
}

export default {
    addUser,
    updateUser
}