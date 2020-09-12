import knex from 'knex';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from 'moment';

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

//Função para criar usuário:

  export const createTodoListUser = async (
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

  //Função para pegar usuário pela id:

  export const getTodoListUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT TodoListUser.id, TodoListUser.nickname FROM TodoListUser WHERE id = '${id}'
    `);
      
      console.log(result[0][0]);
      return result[0][0];
  };

  //Função para editar usuário:

  export const editTodoListUser = async (
    id: number,
    name: string,
    nickname: string,
    ): Promise<any> => {
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname
      })
      .where("id", id);
  };

  //Função para criar tarefa:

  export const createTodoListTask = async (
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

  //Função para pegar tarefa pela id:

  export const getTodoListTaskById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListTask WHERE id = '${id}'
    `);
      
      console.log(result[0][0]);
      return result[0][0];
  };