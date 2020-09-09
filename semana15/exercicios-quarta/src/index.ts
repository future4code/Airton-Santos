import knex from 'knex'

const connection = knex({
    client: "mysql",
    connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: 3306,
        user: "airton-santos",
        password: "b7BEOwqWq#z#S8nfooLV",
        database: "turing-airton-santos"
    }
})

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
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
    return console.log(count);
  };

// countActors("male")

const updateActor = async (id: string, salary: number): Promise<any> => {
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