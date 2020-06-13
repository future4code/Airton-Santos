//Exercícios de interpretação de código
//1-
//O que ele faz? Esse codigo converte 100 reais para Dolar informormando
//a cotacao atual do Dolar em Reais.
//Como faz? E uma funcao que solicita um input do usuario, da cotacao do dolar,
//ja converte em numero com o Number, e multiplica pela variavel valorEmDolar.
//Qual sera o valor impresso no console: Se a cotacao for por exemplo, 5 reais,
//escreverei 5 no prompt, e o console imprimira R$500

//2-
//O que ele faz? Esse codigo compara dois investimentos distintos
//Como faz? E uma funcao que solicita quatro valores: Uma opcao de investimento,
//e o valor que se pretende investir, e outra opcao de investimento, e valor
//e devolve ao usuario seus respectivos ganhos para que veja qual rende mais.
//Alem disso, se o usuario nao escolher nenhuma das opcoes do switch/case,
//ira retornar um alert, que o tipo de investimento esta incorreto.
//Qual sera o valor impresso no console:
//165
//Alerta: TIPO DE INVESTIMENTO INCORRETO!

//3-
//O que ele faz? Retorna quantos numeros pares e quantos numeros impares tem
//no array numeros.
//Como faz? Primeiro, declarando a variavel numeros contendo o array de numeros,
//e mais duas variaveis, array1 e array2, que receberao valores e formarao um
//novo array. Segundo, temos um laco do tipo "for of" que verifica SE o resto
//da divisao por 2 e igual a 0 (par) fara um push para o array1, SE NAO, fara
//um push para o array2.
//Qual sera o valor impresso no console:
//Quantidade total de numeros[14]
//[6]
//[8]

//4-
//O que ele faz? Primeiro ele imprime todos os numeros positivos que contem
//dentro do array numeros, depois ele imprime os numeros menores do que 0.
//Como faz? Com a variavel numeros declarada, contendo varios numeros,
//negativos, positivos, inteiros e reais, foi declarada outras duas variaveis,
//numero1 que foi lhe dado o valor infinito positivo, e numero 2, que foi dado
//o valor 0. Apos, e feito um laco "for of" que procura o maior numero
//e adiciona esse numero a variuavel numero1. Apos ele verifica SE
//a variavel numero e maior que 0, e adiciona o primeiro numero maior que zero
//na variavel numero2 
//Qual sera o valor impresso no console:
//1590
//1
//PS.: Fiz o teste aqui, e percebi que errei, mas nao vou mudar a resposta.
//Mas agora entendi que na verdade o primeiro laco esta verificando o menor
//numero abaixo de infinito positivo, e redeclarando a variavel numero1 para
//-10, e o segundo if esta verificando o ultimo maior numero e redeclarando
//a variavel numero2, que no caso seria o 1590.

//Exercícios de Lógica de Programação
//1-
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

while (num <= 10) {
    console.log(num)
    num++
}
console.log(num)

for (let num = 0; num <= 10; num++) {
    console.log(num)
}

for(let num2 of num) {
    if (num2 <= 10) {
        num2++
        console.log(num2)
    }
}

//2-
//a)false
//b)false
//c)true
//d)true
//e)true

//3-
const quantidadeDeNumerosPares = 3
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

//4-
function tipoTriangulo(lado1, lado2, lado3) {
    if ((lado1 === lado2) && (lado2 === lado3)) {
        console.log(`Esse triangulo é Equilátero`)
    } else if ((lado1 === lado2) || (lado2 === lado3) || (lado3 === lado1)) {
        console.log(`Esse triangulo é Isósceles`)
    } else if ((lado1 !== lado2) || (lado2 !== lado3) || (lado3 !== lado1)) {
        console.log(`Esse triangulo é Escaleno`)
    } 
}
tipoTriangulo(1, 2, 3)

//5-
function verificaNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`O maior é ${numero1}`)
    } else {
        console.log(`O numero maior é ${numero2}`)
    }
        if (numero1 % numero2 !== 0) {
            console.log(`${numero1 } não é divisível por ${numero2}`)
        } else {
            console.log(`${numero2 } não é divisível por ${numero1}`)
        }
            if (numero1 > numero2) {
                numero3 = numero1 - numero2
                console.log(`A diferenca entre eles é ${numero3}`)
            } else {
                numero3 = numero2 - numero1
                console.log(`A diferenca entre eles é ${numero3}`)
            }
}
(verificaNumero(15, 30))

//Exercícios de Funções
//1-
let arrayNumeros = [1, 20, 300, 500, 1234, 8, 89, 50, 55, -20, -15, 999]

function funcaoImprimaMaiorMenor (a) {
    let numero1 = Infinity;
    let numero2 = 0;
    
    for (let i of a) {
        if(i < numero1) {
            numero1 = i
        }
        if (i > numero2) {
            numero2 = i
        }
    }
    a = a.filter((e, i, a) => {
        return e !== numero1
    })

    a = a.filter((e, i, a) => {
        return e !== numero2
    })

    numero1 = Infinity;
    numero2 = 0;

    for (let i of a) {
        if(i < numero1) {
            numero1 = i
        }
        if (i > numero2) {
            numero2 = i
        }
    }
    
    return `${numero1} e ${numero2}`
}

console.log(funcaoImprimaMaiorMenor(arrayNumeros))

//2-
let hello = () => {
    alert("Hello Future4");
}
hello()

//Exercícios de Objetos
//