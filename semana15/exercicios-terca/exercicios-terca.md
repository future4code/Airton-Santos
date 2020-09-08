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
```SELECT * FROM Actor;```

```SELECT id, salary from Actor;```

```SELECT id, name from Actor WHERE gender = "male";```

a)
```SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";```

b)
```SELECT name, salary from Actor WHERE name = "Tony Ramos";```

c)
```SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";```
Não deu erro, mas retornou 0 resultados, pois não há entradas com esse valor na tabela.

d)
```SELECT id, name, salary from Actor WHERE salary < 500000;```

e)
```SELECT id, name from Actor WHERE id = "002";```

### Exercício 4

```SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;```

a) A query acima irá retornar, tudo, representado por *, "onde" representado por WHERE, o nome for "como" representado por LIKE entre aspas duplas a letra A, que deve estar depois de %, pois indica uma string genérica

b)
```SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;```

c)
```SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";```

d)
```SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;```