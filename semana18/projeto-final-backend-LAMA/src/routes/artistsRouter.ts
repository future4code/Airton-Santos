import express from 'express'
import { ArtistsController } from '../controller/ArtistsController';

export const artistsRouter = express.Router()

artistsRouter.post("/add", new ArtistsController().createUser);
artistsRouter.get("/search", new ArtistsController().getArtist);