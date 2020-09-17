import express from "express";
import { AddressInfo } from "net";
import dotenv from 'dotenv';
import { signup } from "./endpoints/signup";
import {login} from './endpoints/login';
import { getUserProfile } from "./endpoints/getUserProfile";
import { HashManager } from "./services/HashManager";
import { deleteUser } from "./endpoints/deleteUser";
import { getUserProfileById } from "./endpoints/getUserProfileById";

dotenv.config();

const app = express();
app.use(express.json());

app.post('/user/signup', signup);
app.post('/user/login', login);
app.get('/user/profile', getUserProfile);
app.delete('/user/:id', deleteUser);
app.get('/user/:id', getUserProfileById);

const server = app.listen(process.env.PORT || 3000, () => {
if (server) {
const address = server.address() as AddressInfo;
console.log(`Server is running in http://localhost:${address.port}`);
} else {
console.error(`Failure upon starting server.`);
}
});

// new HashManager().hash('oi')