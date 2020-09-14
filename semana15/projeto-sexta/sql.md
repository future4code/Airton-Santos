CREATE TABLE TodoListUser (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TodoListTask (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id INT,
    responsible_user_id INT,
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);

select TodoListUser.id, TodoListUser.nickname from TodoListUser;
select * from TodoListUser;
select * from TodoListTask;
select * from TodoListResponsibleUserTaskRelation;

INSERT INTO TodoListTask (title, description, limit_date, creator_user_id)
VALUES ("Comprar pão", "Ir no mercado", "2021/06/06", 1);

INSERT INTO TodoListUser (name, nickname, email)
VALUES ("Felipe Rodrigues", "Felipinho", "felipe@gmail.com");

UPDATE TodoListUser 
SET name = "Hyago Trindade2", nickname = "Hyaguera2", email = "hyago2@gmail.com"
WHERE id = 3;

SELECT TodoListTask.id,
TodoListTask.title,
TodoListTask.description,
TodoListTask.status,
TodoListTask.limit_date,
TodoListTask.creator_user_id,
TodoListUser.nickname
FROM TodoListTask
JOIN TodoListUser
ON TodoListTask.creator_user_id = TodoListUser.id;