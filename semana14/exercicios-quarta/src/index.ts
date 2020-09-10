import {Client} from './Client'
import {Place} from './Place'
import {Residence} from './Residence'
import {Commerce} from './Commerce'
import {Industry} from './Industry'
import { ClientManager } from './ClientManager'
import { ResidentialClient } from './ResidentialClient'
import { CommercialClient } from './CommercialClient'
import { IndustrialClient } from './IndustrialClient'

//Exercício 1
//a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//Todas foram impressas.

// const client: Client = {
//   name: "Airton",
//   registrationNumber: 1,
//   consumedEnergy: 100,

//   calculateBill: () => {
//     return 2;
//   }
// }

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

//Exercício 2
// a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// const casaExemplo: Place = new Place('99500-000')
// Cannot create an instance of an abstract class.ts(2511)

// b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
// Para criar uma instância de uma classe abstrata, deve-se criar uma subclasse dela.

//Exercício 3

// const residenciaUm: Residence = new Residence(2, '99500-000')
// console.log(residenciaUm.getDwellersQuantity())

// const comercioUm: Commerce = new Commerce(5, '99500-000')
// console.log(comercioUm.getFloorsQuantity())

// const industriaUm: Industry = new Industry(3, '99500-000')
// console.log(industriaUm.getMachinesQuantity())

//Exercício 4
//a. Que métodos e propriedades essa classe possui? Por quê?
//As propriedades e métodos da classe Residence e Place, essa última por sua vez, deve ser implementado obrigatoriamente na classe filha seus métodos e propriedades, por ser uma classe abstrata.

//Exercício 5
// a. Quais as semelhanças dessa classe com a ResidentialClient?
//A semelhança é que ambas são subclasses de uma subclasse, e ambas implementam uma classe abstrata.

// b. Quais as diferenças dessa classe com a ResidentialClient?
//A propriedade cpf e cnpj.

//Exercício 6
// a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
//Industry, pois deve herdar propriedades e métodos dessa classe.

// b. *Que interface a `IndustrialClient` implementa? Por quê?*
//Implementa Client, pois busca o método de cálculo de conta de energia e o nome, o registro e o consumo.

// c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
//Pois não terão dados a serem alterados, e sim apenas lidos.

// Exercício 7
//Client Manager criado.

// Exercício 8
const clientManager = new ClientManager()

const residentialClient = new ResidentialClient('Hyago', 1, 500, '123.123.123-12', 2, '99500-000')
clientManager.registerClient(residentialClient)
console.log(residentialClient.calculateBill())

const commercialClient = new CommercialClient('Hyago corporation', 2, 500, '123.123.123-123', 2, '99500-000')
clientManager.registerClient(commercialClient)
console.log(commercialClient.calculateBill())

const industrialClient = new IndustrialClient('Hyago industries', 3, 500, '123.123.123-123', 2, '99500-000')
clientManager.registerClient(industrialClient)
console.log(industrialClient.calculateBill())

console.log(clientManager.calculateBillOfClient(2))

console.log(clientManager.calculateTotalIncome())

clientManager.deleteUser(3)