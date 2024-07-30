import { User } from "../models/User.model.js";
export const getAllUsers = async () => {
    const userData = await User.find({});
    console.log(userData);
    return userData;
};
