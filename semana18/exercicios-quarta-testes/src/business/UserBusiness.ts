import { UserDatabase } from "../data/UserDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";

export class UserBusiness {

    public async signup(
        name: string,
        email: string,
        password: string,
        role: string
    ) {

        if (!name || !email || !password || !role) {
            throw new InvalidParameterError("Missing input");
        }

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        const idGenerator: IdGenerator = new IdGenerator()
        const id = idGenerator.generate();

        const hashGenerator: HashGenerator = new HashGenerator()
        const cypherPassword = await hashGenerator.hash(password);

        const userDatabase: UserDatabase = new UserDatabase()
        await userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
        );

        const tokenGenerator: TokenGenerator = new TokenGenerator()
        const accessToken = tokenGenerator.generate({
            id,
            role,
        });
        return { accessToken };
    }

    public async login(email: string, password: string) {

        if (!email || !password) {
            throw new InvalidParameterError("Missing input");
        }

        const userDatabase: UserDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(email);

        if (!user) {
            throw new NotFoundError("User not found");
        }

        const hashGenerator: HashGenerator = new HashGenerator()
        const isPasswordCorrect = await hashGenerator.compareHash(
            password,
            user.getPassword()
        );

        if (!isPasswordCorrect) {
            throw new InvalidParameterError("Invalid password");
        }

        const tokenGenerator: TokenGenerator = new TokenGenerator()
        const accessToken = tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
        });

        return { accessToken };
    }
}
