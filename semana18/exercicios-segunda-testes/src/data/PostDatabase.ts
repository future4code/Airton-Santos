import { POST_TYPE } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'LabookPosts';

    public async createPost(postId: string, photoUrl: string, description: string, createdAt: string, type: POST_TYPE, userId: string) {
        await this.getConnection()
        .insert({
            postId, 
            photoUrl,
            description,
            createdAt,
            type,
            userId
        })
        .into(PostDatabase.TABLE_NAME)
    }
}