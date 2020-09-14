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
        console.log("Usuário criado com sucesso!")
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  //2. Pegar usuário pelo id

    app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const user = await getTodoListUserById(req.params.id as any);

        res.status(200).send({user});
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
});

  //3. Editar usuário

  app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
      await editTodoListUser(req.params.id as any, req.body.name, req.body.nickname);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    //4. Criar tarefa

    app.put("/task", async (req: Request, res: Response) => {
      try {
        await createTodoListTask(
          req.body.title,
          req.body.description,
          req.body.limit_date,
          req.body.creator_user_id
        );
    
        res.status(200).send();
          console.log("Tarefa criada com sucesso!")
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });

    //5. Pegar tarefa pelo id

    app.get("/task/:id", async (req: Request, res: Response) => {
      try {
          const task = await getTodoListTaskById(req.params.id as any);
  
          res.status(200).send({task});
      } catch (err) {
          res.status(400).send({
          message: err.message,
          });
      }
  });