### Exercício 1

a)
É uma chave que referencia uma tabela dentro de outra.

b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom, recomendo!",
    7,
	"001"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom, recomendo!",
    10,
	"002"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Muito bom, recomendo!",
    8,
	"003"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "Muito bom, recomendo!",
    9,
	"004"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"005",
    "Muito bom, recomendo!",
    9,
	"005"
);
```

c)
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"006",
    "Muito bom, recomendo!",
    2,
	"033"
);
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-airton-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

A query busca relação com a tabela de filmes, porém não encontra nada na posição 033, por isso não conseguimos adicionar uma nota para essa posição.

d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-airton-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Novamente ele não deixa apagar, pois esse filme está atrelado à outra tabela.

### Exercício 2

a) É uma tabela de junção, que interliga dados de duas tabelas diferentes.

b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "002"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "005"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "004"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "006"
);
```

c)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "033"
);
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-airton-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O mesmo que acontece ao tentar deletar, ele não consegue relacionar a posição 033, então ele não deixa adicionar.

d)
```
DELETE FROM Actor WHERE id = 001;
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-airton-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não deixa deletar, pois o id da tabela de atores está atrelado a um filme.

### Exercício 3

```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

a)
Faz uma equivalência através dessa keyword, para que as duas tabelas estejam emparelhadas por uma referência.

b)
```
SELECT m.id as movie_id, r.rate as rating, m.title as title FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4

a)
```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)
```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 5
```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

a)
Para adicionar mais uma tabela ao resultado.

b)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c)
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
Error Code: 1054. Unknown column 'm' in 'field list'

ele não reconhece porque tem uma vírgula no lugar de ponto em m.title.

d)
```
SELECT 
	m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 6

