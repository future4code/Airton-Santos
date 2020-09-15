### Exercício 1

a)
Rounds é um numero que controla quanto tempo é preciso para calcular um hash bcrypt, o ideal é 12.
É um dado aleatório que é adicionado ao hash da senha do usuário, de forma que evite os ataques "rainbow table".
Usei 12, pois acho que é o ideal para proteger a senha dos usuários.

b)
c)
```
export class HashManager {

    public async hash(
        plainText: string
    ): Promise<string> {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const cypherText: string = await bcrypt.hash(plainText, salt)

        return cypherText
    }

    public async compare(
        plainText: string,
        cypherText: string
    ): Promise<boolean> {
        return await bcrypt.compare(plainText, cypherText)
    }
}
```
### Exercício 2

a)
O cadastro deve ser implementado primeiro, pois ele armazena o hash no banco. A partir daí posso realizar teste utilizando um usuário com senha e outro com hash.

b)
```

```

c)
```

```

d)
