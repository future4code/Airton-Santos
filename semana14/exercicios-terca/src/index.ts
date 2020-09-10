import {User} from './User'
import {Custumers} from './Custumers'
import {Employee} from './Employee'
import {Sellers} from './Seller'

//Exercício 1
// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
//Não, pois está private sem método de get.

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//Uma vez

//Exercício 2
// a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
//Uma vez

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
//Uma vez

//Exercício 3
// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//Não, pois herdou de seu pai, a propriedade que originalmente é privada.

//Exercício 4
// const cliente: Custumers = new Custumers("1", "airton@gmail.com", "Airton", "123", "1234 5678 1234 5678", 500);
// console.log(cliente.interoduceYourself());

//Exercício 5
// const cliente: Custumers = new Custumers("1", "airton@gmail.com", "Airton", "123", "1234 5678 1234 5678", 500);
// console.log(cliente.interoduceYourself());

//Exercício 6
// a. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//Uma vez

// b. *Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?*
//Nenhum.

//Exercício 7
//const empregado: Employee = new Employee('1', 'diego@gmail.com', 'Diego', '123', '12/01/2019', 8400);

//console.log(empregado.calculateTotalSalary())

//Exercício 8
// a. *Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor, pois quando **não colocamos um construtor na classe filha**, ela **herda** o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?*
// const vendedor: Sellers = new Sellers('2', 'hyago@gmail.com', 'Hyago', '123', '22/01/2019', 7500)

// b. *Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?*
//Consegui imprimir todos os parâmetros, menos o password, pois é o único que não tem um método get.

//Exercício 9
// a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
//É possível alterar pelo método set, e é possivel imprimir pelo método get.
// console.log(`A quantidade de vendas é: ${vendedor.setSalesQuantity(40)}`)
// console.log(`A quantidade de vendas é: ${vendedor.getSalesQuantity()}`)

//Exercício 10
// a. Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?
// const vendedor: Sellers = new Sellers('3', 'mateus@gmail.com', 'Mateus', '123', '23/03/2019', 6500)
// vendedor.setSalesQuantity(35)
// console.log(`O total de salário do vendedor ${vendedor.getName()} é: R$${vendedor.calculateTotalSalary()}.`)

//Foi impresso:
// O total de salário do vendedor Mateus é: R$7075.

//Exercício 11
// const vendedor: Sellers = new Sellers('3', 'mateus@gmail.com', 'Mateus', '123', '23/03/2019', 6500)
// vendedor.setSalesQuantity(35)
// console.log(`O total de salário do vendedor ${vendedor.getName()} é: R$${vendedor.calculateTotalSalary()}.`)
