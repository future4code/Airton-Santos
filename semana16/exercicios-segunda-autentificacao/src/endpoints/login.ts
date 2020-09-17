import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response) => {
    try{
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if (!userData.email || !userData.password || userData.email.indexOf("@") === -1) {
            throw new Error('Insira todas as informações necessárias para o login')
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(userData.email);

        if (userData.password !== user.password) {
            throw new Error('Usuário ou senha inválidos')
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id: user.id});

        res.status(200).send({
            message: 'Usuário logado com sucesso!',
            token
        })

    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}