import {createTodoListUser, createTodoListTask, editTodoListUser, getTodoListUserById, getTodoListTaskById, app} from './functions';

import express, { Request, Response } from "express";

//1. Criar usuário

app.put("/user", async (req: Request, res: Response) => {
    try {
      await createTodoListUser(
        req.body.name,
        req.body.nickname,
        req.body.email
      );
  
      res.status(200).send();
        console.log("Criado com sucesso!")
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  //2. Pegar usuário pelo id

    app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const user = await getTodoListUserById(req.query.id as unknown as number);

        res.status(200).send({
        id: user,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
});