import { Request, Response } from "express";
import { userRegisterService } from "../service/user.service";

export const userRegisterController = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await userRegisterService(req.body)
        res.status(200).json(result)
    } catch (err) {
        if(err instanceof Error) {
            throw new Error(err.message)
        } else {
            console.error('An unexpected error occurred');
        }
    }
}