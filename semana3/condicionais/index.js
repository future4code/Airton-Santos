//EXERCICIO 1

/*Qual o teste que ele realiza?
Testa se o numero informado no prompt e par ou impar

Para que tipos de números ele imprime no console "Passou no teste"?
Numeros divisiveis por 2

Para que tipos, a mensagem é "Não passou no teste"?
Todos os outros numeros digitados que nao sao divisiveis por 2*/

//EXERCICIO 2

/*a- para verificar o preco de cada fruta

b-O preço da fruta  Maçã  é  R$  2.25

c- R$24,55

d-O preço da fruta  Pêra  é  R$  5*/

//EXERCICIO 3

/*Sim, ha um erro, "Uncaught ReferenceError: mensagem is not defined at."
Pelo que consegui interpretar, o erro se da nesse caso,
pois "mensagem" nao recebe nenhuma informacao pois nao consegue acessar o escopo dentro do if.
O console.log(mensagem) deveria estar sendo executado dentro do if*/

//EXERCICIO 4

//a-
/*let umNumero = prompt("Digite o primeiro número:")
let outroNumero = prompt("Digite o segundo número:")

umNumero = Number(umNumero)
outroNumero = Number(outroNumero)

if (umNumero > outroNumero) {
    console.log(umNumero, outroNumero)
} else if (umNumero < outroNumero) {
    console.log(outroNumero, umNumero)
}*/
// Ao digitar numeros iguais, o console nao imprimiu nada

//b-
/*let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")
let terceiroNumero = prompt("Digite o terceiro numero:")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
terceiroNumero = Number(terceiroNumero)

if ((primeiroNumero > segundoNumero) && (primeiroNumero > terceiroNumero) && (segundoNumero > terceiroNumero)){
    console.log(primeiroNumero, segundoNumero, terceiroNumero)
} else if ((primeiroNumero < segundoNumero) && (primeiroNumero < terceiroNumero) && (segundoNumero < terceiroNumero)){
    console.log(terceiroNumero, segundoNumero, primeiroNumero)
} else if ((primeiroNumero > segundoNumero) && (primeiroNumero < terceiroNumero) && (segundoNumero < terceiroNumero)){
    console.log(terceiroNumero, primeiroNumero, segundoNumero)
} else if ((primeiroNumero > segundoNumero) && (primeiroNumero > terceiroNumero) && (segundoNumero < terceiroNumero)){
    console.log(primeiroNumero, terceiroNumero, segundoNumero)
} else if ((primeiroNumero < segundoNumero) && (primeiroNumero < terceiroNumero) && (segundoNumero > terceiroNumero)){
    console.log(segundoNumero, terceiroNumero, primeiroNumero)
}
// Ao digitar numeros iguais, o console nao imprimiu nada


//c-
else if ((primeiroNumero = segundoNumero) && (primeiroNumero = terceiroNumero) && (segundoNumero = terceiroNumero)){
    alert("Voce deve escolher 3 numeros diferentes entre si!")
}*/

//EXERCICIO 5
// Link do fluxograma: https://1drv.ms/u/s!AuykhqsrEr1zprhXnWWEOVD7rgALEQ?e=2AOr74

alert("Para descobrir a classificacao do animal, digite sim ou não para as perguntas a seguir!"

let entrada = prompt("O animal em questao tem ossos?")
if (entrada == "não") {
    console.log("O animal em questao é um INVERTEBRADO!")
} else {
let entrada2 = prompt("O animal em questao tem pelos?")
if (entrada2 == "sim") {
let entrada2 = prompt("Esse animal e racional ou irracional?")
if (entrada2 == "sim") {
    console.log("O animal na verdade e um SER HUMANO!")
} else {
    console.log("O animal e um MAMIFERO NAO HUMANO!")
}
} else {
let entrada2 = prompt("O animal em questao tem penas?")
if (entrada2 == "não") {
let entrada2 = prompt("E um animal terrestre?")
if (entrada2 == "sim")
let entrada2 = prompt("O animal passa parte da vida em ambiente aquatico?")
    console.log(entrada2)
} else {
    console.log("O animal em questao e um PEIXE!")
} else {
    console.log("O animal em questao e uma AVE!")
}
}