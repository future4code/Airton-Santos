//Exercício 1
// a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//Para iniciar ações que dever ser executadas ao criar uma instância.

// b*) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// 1 vez

// c*) Como conseguimos ter acesso às propriedades privadas de uma classe?*
//Usando a keyword "this"

import { FileManager } from "./FileManager";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
  
    constructor(
       cpf: string,
       name: string,
       age: number
    ) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    
    public createClient(): void{
        }
  }

  
  const clienteUm: UserAccount = new UserAccount("Airton", "123.123.123.12", 33);
  clienteUm.createClient();

  const clienteDois: UserAccount = new UserAccount("Hyago", "123.123.123.12", 28);
  clienteDois.createClient();

  const clienteTres: UserAccount = new UserAccount("Diego", "123.123.123.12", 28);
  clienteTres.createClient();

  const fileManager: FileManager = new FileManager('clients.json');
  const clients = fileManager.readFromJson();
  console.log(clients)

  clients.push(clienteTres)

  fileManager.writeInJson(clients);

