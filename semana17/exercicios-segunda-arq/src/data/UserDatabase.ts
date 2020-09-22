import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_USERS: string = 'User_Arq';

    public async createUser(id: string, name: string, email: string, password: string, role: string): Promise<void> {
        try{
                await this.getConnection()
                .insert({
                    id,
                    name,
                    email,
                    password,
                    role
                }).into(UserDatabase.TABLE_USERS);
            } catch(err) {
                throw new Error (err.sqlMessage || err.message)
            }
    };

    public async getUserByEmail(email: string): Promise<any> {
        try {
            const result = await this.getConnection()
            .select('*')
            .from(UserDatabase.TABLE_USERS)
            .where({email})
            return result[0]
        } catch(err) {
            throw new Error (err.sqlMessage || err.message)
        }
    };

    public async getAllUsers(): Promise<any> {
        try {
            const result = await this.getConnection()
            .select('*')
            .from(UserDatabase.TABLE_USERS)
            return result
        } catch(err) {
            throw new Error(err.sqlMessage || err.message);
        }
    };
    
    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_USERS)
        .where({id})
        return result[0]
    };
    
    public async deleteUser(id: string): Promise<void> {
        await this.getConnection()
        .delete(id)
        .from(UserDatabase.TABLE_USERS)
        .where({id})
    };
}; 