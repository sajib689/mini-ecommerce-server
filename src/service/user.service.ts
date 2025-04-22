import { IUser } from "../interface/user.interface";
import { User } from "../models/user.model";
import bcrypt from 'bcryptjs';

export const userRegisterService = async (user: IUser) => {
    try {
        user.password = await bcrypt.hash(user.password, 8)
        const result = await User.create(user)
        return result
    } catch (err) {
        if(err instanceof Error) {
            throw new Error(err.message);
        } else {
            console.error('An unexpected error occurred');
        }
    }
}