import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import {UserDatabase} from '../data/UserDatabase'
import { BaseDatabase } from "../data/BaseDatabase";

export const getUserProfileById = async (req: Request, res: Response) => {
    try {

    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
        id: user.id,
        email: user.email,
        role: user.role
        })

    } catch(err) {
        res.status(400).send({
          message: err.message
        })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}