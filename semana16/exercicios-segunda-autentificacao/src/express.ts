
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

export const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
if (server) {
const address = server.address() as AddressInfo;
console.log(`Server is running in http://localhost:${address.port}`);
} else {
console.error(`Failure upon starting server.`);
}
});