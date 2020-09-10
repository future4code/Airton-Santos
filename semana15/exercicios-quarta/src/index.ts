import knex from 'knex';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

    const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

    const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

      return result[0][0]
      return console.log(result[0][0])
  }

// getActorById("002")

    const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return console.log(result)
  }

// searchActor("Fernanda")

    const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    console.log(count);
    return count;
  };

  // countActors("male")

    const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

//   createActor("006", "Bruce Willys", 3400000, new Date("1965/06/06"), "male")

    const updateActorSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

// updateActor("002", 1400000)

    const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  };

// deleteActor("002")

    const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
    
    console.log(result[0].average);
    return result[0].average;
  };

// avgSalary("male")

    async function getAllActors(): Promise<any> {
    try {
    const result = await connection.raw(`
    SELECT * FROM Actor
    `)
    console.log(result)
    return result
    } catch (error) {
    console.log(error)
    }
   }

    app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    app.get("/actors", async (req: Request, res: Response) => {
    try {
      const allActors = await getAllActors();
      res.status(200).send({
        allActors,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    app.put("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.birth_date),
        req.body.gender
      );
  
      res.status(200).send();
        console.log("Criado com sucesso!")
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    app.post("/actor", async (req: Request, res: Response) => {
    try {
      await updateActorSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: number
  ) => {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_date: releaseDate,
        rating: rating,
      })
      .into("Movie");
  };
  
    app.post("/movie", async (req: Request, res: Response) => {
    try {
      await createMovie(
        req.body.id,
        req.body.title,
        req.body.synopsis,
        req.body.releaseDate,
        req.body.rating
      );
  
      res.status(200).send({
        message: "Success"
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

    const searchMovie = async (name: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Movie WHERE name = "${name}"
      `)
      return console.log(result)
    }

    app.get("/movie/search", async (req: Request, res: Response) => {
    try {
      const movies = await searchMovie(req.query.query as string);
  
      res.status(200).send({
        movies: movies,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });