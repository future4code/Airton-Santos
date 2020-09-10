### Exercício 1
```
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return console.log(result[0][0])
  }

getActorById("002")
```

a)A resposta que temos quando usamos o raw, é o resultado da query, com vários metadados que não nos interessam.

b)
```
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return console.log(result)
  }

searchActor("Fernanda")
```

c)
```
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return console.log(count);
  };

countActors("male")
```

### Exercício 2

a)
```
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

// updateActor("002", 1400000)
```

b)
```
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  };

// deleteActor("002")
```

c)
```
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
    
    console.log(result[0].average);
    return result[0].average;
  };

// avgSalary("male")
```

### Exercício 3

a)É a forma de acessar as informações do endpoint pela query.

b)É a forma de enviar para o localhost, as respostas da requisição.

c)
```
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
```

### Exercício 4

a)
```
    app.post("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
```

b)
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5
```
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
  ```
  ```
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
  ```

### Exercício 6
```
app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 7
```app.get("/movie/search/:title", async (req: Request, res: Response) => {
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
```