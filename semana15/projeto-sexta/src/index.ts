import knex from 'knex';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from 'moment'

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
if (server) {
const address = server.address() as AddressInfo;
console.log(`Server is running in http://localhost:${address.port}`);
} else {
console.error(`Failure upon starting server.`);
}
});

const createTodoListUser = async (
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email
      })
      .into("TodoListUser");
  };

const createTodoListTask = async (
    title: string,
    description: string,
    limitDate: string,
    creator_user_id: number
  ): Promise<void> => {
    await connection
      .insert({
        title: title,
        description: description,
        limit_date: moment(limitDate, "DD/MM/YYYY").format("YYYY/MM/DD"),
        creator_user_id: creator_user_id
      })
      .into("TodoListTask");
  };

  try {
    createTodoListTask(
        "Comprar arroz",
        "Ir no mercado",
        "03/01/2021",
        1
        );
  }
  catch(err) {
      console.log(err.message)
  };