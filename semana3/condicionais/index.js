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