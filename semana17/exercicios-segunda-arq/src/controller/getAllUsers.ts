import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string;

        const getAllUsers = new UserBusiness();
        const data = getAllUsers.getAllUsers(token);

        res.status(200).send({
            data
        })

    } catch(err) {
        res.status(err.statusCode || 400).send({
            message: err.message
        })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}