import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import {UserDatabase} from '../data/UserDatabase'

export const getUserProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserById(authenticationData.id);

        if(user === undefined) {
            throw new Error('Usuário não encontrado!')
        }

        res.status(200).send(user)

    } catch(err) {
        res.status(err.statusCode || 400).send({
            message: err.message
        })
    }
}