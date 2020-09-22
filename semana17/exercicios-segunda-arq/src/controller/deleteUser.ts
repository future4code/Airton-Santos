import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;

        const id = req.params.id;

        const userBusiness = new UserBusiness();
        await userBusiness.deleteUser(id, token);

        res.status(200).send({
            message: 'Usuário apagado com sucesso!'
        })

    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}