### Exercício 1

a) Eu concordo, visto a variedade de ids que podem ser produzidas, sem correr o risco de haver algum conflito.
### Exercício 2

a)
Primeiramente temos um nome de tabela guardado na constante userTableName, depois temos a ligação com o banco de dados através do knex.
Depois temos a função assíncrona que cria o usuário na tabela User.

b)
```
CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL
);
```

c)
```
export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'Users';

    public async createUser(id: string, name: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
            id,
            name,
            email,
            password
        }).into(UserDatabase.TABLE_NAME)
    }
}
```

d)
```
const createUser = new UserDatabase();
const newUser = createUser.createUser('001', 'Airton', 'airton@gmail.com', '123')
```
### Exercício 3

a) Deve-se passar as string, porque ela pode ser qualquer tipo.

b)
```
import * as jwt from 'jsonwebtoken';

export class Authenticator {
    public generateToken(data: AuthenticationData): string {
        return jwt.sign(
        data,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRES_IN as string}
        )
    }
}
```
### Exercício 4

a)
```
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";

export const signup = async (req: Request, res: Response) => {
    try{
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Insira todas as informações necessárias para o cadastro')
        }
        
        if (userData.email.indexOf('@') === -1) {
            throw new Error('E-mail inválido')
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, userData.name, userData.email, userData.password);

        const auth = new Authenticator();
        const token = auth.generateToken({id});

        res.status(200).send({
            message: 'Usuário criado com sucesso!',
            token
        })

    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}
```

b)
```
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Insira todas as informações necessárias para o cadastro')
        }
        
        if (userData.email.indexOf('@') === -1) {
            throw new Error('E-mail inválido')
        }
```

c)
```
if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }
```
### Exercício 5

a)
```
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'Users';

    public async createUser(id: string, name: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
            id,
            name,
            email,
            password
        }).into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({email})
        return result[0]
    }
}
```

b)
```

```
### Exercício 6

a)
b)
```
export const login = async (req: Request, res: Response) => {
    try{
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if (!userData.email || !userData.password || userData.email.indexOf("@") === -1) {
            throw new Error('Insira todas as informações necessárias para o cadastro')
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

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
```
### Exercício 7
a)
É uma particularidade do JWT, pois ele pode retornar qualquer coisa.

b)
```
export class Authenticator {
    public generateToken(data: AuthenticationData): string {
        return jwt.sign(
        data,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRES_IN as string}
        )
    }

    public getData(token: string): AuthenticationData{
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        return {
            id: data.id
        }
    }
}

export interface AuthenticationData {
    id: string;
}
```
### Exercício 8

a)
```
export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'Users';

    public async createUser(id: string, name: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
            id,
            name,
            email,
            password
        }).into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({email})
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({id})
        return result[0]
    }
}
```

b)
```
export const login = async (req: Request, res: Response) => {
    try{
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if (!userData.email || !userData.password || userData.email.indexOf("@") === -1) {
            throw new Error('Insira todas as informações necessárias para o cadastro')
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
```