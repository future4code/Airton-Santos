### Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
```
a)
VARCHAR(255) limita o número de caracteres em 255.
PRIMARY KEY diz que é a chave primária de acesso a tabela.
NOT NULL diz que não pode ser vazia.
DATE significa que é uma data.

b)
```
SHOW DATABASES;
```
No result grid, ele resulta em duas rows, uma de nome information_schema e outra turing-airton-santos


```
SHOW TABLES;
```
No grid result, mostra a tabela de nome Actor.

c)
```
SHOW Actor;
```
Retorna um erro: 16:02:21	SHOW Actor	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1	0.031 sec
O comando correto seria ```DESCRIBE Actor```?

### Exercício 2
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Airton Lopes",
  8500,
  "1987-01-03", 
  "male"
);
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de erro: 1062. Entrada duplicada para a chave PRIMARIA 002
Esse erro aconteceu pois a chave primária, não pode ser duplicada na tabela.

C)
```
INSERT INTO Actor
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
Error Code: 1136. Column count doesn't match value count at row 1.
A contagem de colunas não corresponde à contagem de valores na linha 1.
Foram passados apenas 3 valores das colunas, faltou birth_date e gender.
Mas é possível passar apenas os dados, basta omitir os valores das colunas, e preencher todos os campos.

d)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
Error Code: 1364. Field 'name' doesn't have a default value.
Código de erro: 1364. O campo 'nome' não tem um valor padrão.
Diz que o campo não pode ser vazio, visto que foi atribuído a constraint NOT NULL.

e)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
A data deve estar entre aspas duplas.

### Exercício 3
```
SELECT * FROM Actor;
```

```
SELECT id, salary from Actor;
```

```
SELECT id, name from Actor WHERE gender = "male";
```

a)
```
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
```

b)
```
SELECT name, salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
```
Não deu erro, mas retornou 0 resultados, pois não há entradas com esse valor na tabela.

d)
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```

e)
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

```SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;```

a) A query acima irá retornar, tudo, representado por *, "onde" representado por WHERE, o nome for "como" representado por LIKE entre aspas duplas a letra A, que deve estar depois de %, pois indica uma string genérica "e" representado por AND, que o salário seja "abaixo" de 300000, representado por > 300000.

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d)
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  ```

### Exercício 5

a)
```
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

b)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-06-01",
    7
);
```

c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

### Exercício 6

a)
```
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2001/03/04"
WHERE id = "003"
```

b)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c)
```
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d)
```
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "205";
```
Ele da sucesso, porém não altera nada, pois não há nada na posição 205.

### Exercício 7

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000;
```

### Exercício 8

a)
Essa query conta quantos atores tem de cada gênero na tabela.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor
ORDER BY salary;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```