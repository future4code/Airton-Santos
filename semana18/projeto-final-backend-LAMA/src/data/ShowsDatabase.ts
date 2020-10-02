import { ShowsBusiness } from "../business/ShowsBusiness";
import { Show } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "./BaseDatabase";

export class ShowsDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'Shows';

    private static showsBusiness = new ShowsBusiness(
        new ShowsDatabase(),
        new IdGenerator(),
        new Authenticator()
        );

    public async createShow(id: string, week_day: string, start_time: number, end_time: number, artist_id: string): Promise<void> {
        try{
                await this.getConnection()
                .insert({
                    id,
                    week_day,
                    start_time,
                    end_time,
                    artist_id
                }).into(ShowsDatabase.TABLE_NAME);
            } catch(error) {
                throw new Error (error.sqlMessage || error.message)
            }
    };

    public async getShows(week_day: string): Promise<Show> {
        const result = await this.getConnection().raw(`
          SELECT * from ${ShowsDatabase.TABLE_NAME} WHERE week_day LIKE '%${week_day}%'
        `);
        return (result[0]);
    }

};