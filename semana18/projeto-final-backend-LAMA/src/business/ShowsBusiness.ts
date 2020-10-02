import { ShowsDatabase } from "../data/ShowsDatabase";
import { USER_ROLES } from "../model/User";
import { Authenticator} from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowsBusiness {

    constructor(
        private showsDatabase: ShowsDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    public async createShow(
        token: string,
        week_day: string,
        start_time: number,
        end_time: number,
        artist_id: string
        ) {

        const userData = this.authenticator.getData(token);
        const id = this.idGenerator.generate();

        if (userData.role !== USER_ROLES.ADMIN) {
            throw new Error('Apenas usuários administradores podem cadastrar bandas')
        }

        await this.showsDatabase.createShow(
            id,
            week_day,
            start_time,
            end_time,
            artist_id
        );
    }

    public async getShow(
        week_day: string
    ) {
        const result = await this.showsDatabase.getShows(week_day)
        return result
    }

}