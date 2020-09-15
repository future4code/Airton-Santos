### Exercício 1

a)
Rounds é um numero que controla quanto tempo é preciso para calcular um hash bcrypt, o ideal é 12.
É um dado aleatório que é adicionado ao hash da senha do usuário, de forma que evite os ataques "rainbow table".
Usei 12, pois acho que é o ideal para proteger a senha dos usuários.

b)
c)
```
export class HashManager {

    public async hash(
        plainText: string
    ): Promise<string> {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const cypherText: string = await bcrypt.hash(plainText, salt)

        return cypherText
    }

    public async compare(
        plainText: string,
        cypherText: string
    ): Promise<boolean> {
        return await bcrypt.compare(plainText, cypherText)
    }
}
```

### Exercício 2

a)
O cadastro deve ser implementado primeiro, pois ele armazena o hash no banco. A partir daí posso realizar teste utilizando um usuário com senha e outro com hash.

b)
```
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
        
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const cypherPassword = await hashManager.hash(userData.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(
            id,
            userData.name,
            userData.email,
            cypherPassword
        );

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

c)
```
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

        const passwordIsCorrect: boolean = await new HashManager().compare(
            userData.password,
            user.password
        );

        if (!passwordIsCorrect) {
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

d)
Não precisamos, pois assim que o usuário já estiver logado, já vai ter passado pela segurança, além disso é um metodo get, que só funciona com o usuário já logado.

### Exercício 3

a)
```
ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal" 
```

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
            id: data.id,
            role: data.role
        }
    }
}

export interface AuthenticationData {
    id: string;
    role: string;
}
```

c)
```
export const signup = async (req: Request, res: Response) => {
    try{
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        if (!userData.name || !userData.email || !userData.password || !userData.role) {
            throw new Error('Insira todas as informações necessárias para o cadastro')
        }
        
        if (userData.email.indexOf('@') === -1) {
            throw new Error('E-mail inválido')
        }
        
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const cypherPassword = await hashManager.hash(userData.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(
            id,
            userData.name,
            userData.email,
            cypherPassword,
            userData.role
        );

        const auth = new Authenticator();
        const token = auth.generateToken({id, role: userData.role});

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

d)
```
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

        const passwordIsCorrect: boolean = await new HashManager().compare(
            userData.password,
            user.password
        );

        if (!passwordIsCorrect) {
            throw new Error('Usuário ou senha inválidos')
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id: user.id, role: user.role});

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

### Exercício 4

a)
```
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

        if(authenticationData.role !== "admin") {
            throw new Error('Usuário não autorizado!')
        }

        res.status(200).send(user)

    } catch(err) {
        res.status(err.statusCode || 400).send({
            message: err.message
        })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}
```

### Exercício 5

```
export const deleteUser = async (req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
  
      if (authenticationData.role !== "admin") {
        throw new Error("Somente administradores podem deletar um usuário");
      }
  
      const id = req.params.id;
  
      const userDatabase = new UserDatabase();
      await userDatabase.deleteUser(id);
  
      res.sendStatus(200);

    } catch(err) {
      res.status(400).send({
        message: err.message,
      });
    } finally {
        await BaseDatabase.destroyConnection()
    }
}
```

### Exercício 6

```
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
```

### Exercício 7

```
import Knex from "knex";
import knex from 'knex';
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDatabase {
    private static connection: Knex | null = null;

    protected getConnection(): Knex {
        if (BaseDatabase.connection === null) {
            BaseDatabase.connection = knex ({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                }
            })
        }
        return BaseDatabase.connection;
    }

    static async destroyConnection(): Promise<void> {
            if(BaseDatabase.connection) {
            await BaseDatabase.connection.destroy()
            BaseDatabase.connection = null
        }
    
    }
}
```