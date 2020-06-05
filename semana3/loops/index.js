/*EXERCICIO 1

O que o código abaixo está fazendo?

O codigo esta criando um loop para que a variavel sum, some ele mesmo,
enquanto o resultado for menor que 15

Qual o resultado impresso no console?

105*/

/*EXERCICIO 2

a. O que o comando .push faz?

Cria o array novaLista, apenas com os indices do array lista que for divisivel por 5

b. Qual o valor impresso no console?

[10, 15, 25, 30]

c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?

numero = 3 :[12, 15, 18, 21, 27, 30]
numero = 4 :[12]                      */

//*EXERCICIO 3*//
//a
/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
let menorNumero = 999

for(numeroDoArray of arrayOriginal) {
    if (numeroDoArray < menorNumero) {
        menorNumero=numeroDoArray
        }

        if (numeroDoArray > maiorNumero) {
            maiorNumero=numeroDoArray
        }

}

console.log("O menor numero e ", menorNumero, "e o maior numero e ", maiorNumero)*/

//b
/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for(let item of arrayOriginal) {
    novoArray.push(item / 10)
  }
  console.log(novoArray)*/

//c
/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for(let item of arrayOriginal) {
    if (item %2 === 0) {
        novoArray.push(item)
    }
  }
  console.log(novoArray)*/

  //d
/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let item in arrayOriginal) {
    console.log("O elemento do index ", item, " e ", arrayOriginal[item])
}*/