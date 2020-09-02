import {Client} from './Client'
import {Place} from './Place'
import {Residence} from './Residence'
import {Commerce} from './Commerce'
import {Industry} from './Industry'

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

const residenciaUm: Residence = new Residence(2, '99500-000')
console.log(residenciaUm)

const comercioUm: Commerce = new Commerce(5, '99500-000')
console.log(comercioUm)

const industriaUm: Industry = new Industry(3, '99500-000')
console.log(industriaUm)