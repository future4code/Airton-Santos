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
//1-Arrays e obejtos sao conjuntos de informacoes que sao armazenadas dentro de uma variavel.
//Podemos/Devemos utilizar arrays e objetos, quando precisamos armazenar informacoes variadas
//dentro de uma variavel, com a diferenca que o objeto, pode-se criar dados mais complexos,
//como por exemplo: Dados de cadastro de uma pessoa, ou um registro de mercadorias, como se
//fosse um fichario.

//2-
function criaRetangulo (lado1, lado2) {
    return {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }
}
console.log(criaRetangulo(10, 20))
//3-
let filmeFavorito = {
    titulo: "Clube da luta",
    ano: 1999,
    diretor: "David Fincher",
    Atores: ["Edward Norton", "Brad Pitt"],
    Atrizes: ["Helena Bonham Carter", "Penelope Cruz"]
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.Atores}, ${filmeFavorito.Atrizes}.`)

//4-
//a-
let pessoa = {
    nome: "Airton",
    idade: 33,
    email: "airton@labenu.com",
    endereco: "Rua Soledade, 29"
}

function anonimizarPessoa(p) {
    return {
    nome: "ANÔNIMO",
    idade: p.idade,
    email: p.email,
    endereco: p.endereco
    }
}

console.log(anonimizarPessoa(pessoa))
console.log(pessoa)

//Exercícios de Funções de array
//1-
let pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a
let retornaPessoaAdulto = (a) => {
    a = a.filter((elm, idx, arr) => {
        return elm.idade >= 18
    })
    return a
}

//b
    console.log(retornaPessoaAdulto(pessoas))

    let retornaPessoaCrianca = (a) => {
    a = a.filter((elm, idx, arr) => {
        return elm.idade <= 18
    })
    return a
}
    console.log(retornaPessoaCrianca(pessoas))

//2-
//a-
const array = [10, 20, 30, 40, 50, 60, 5, 7, 9, 11, 13]

let entradasMultiplicadosPorDois = (a) => {
    a = a.map((elm, idx, arr) => {
        return (elm) * 2
    })
    return a
}

console.log(entradasMultiplicadosPorDois(array))

//b
let entradasMultiplicadosPorTresString = (a) => {
    a = a.map((elm, idx, arr) => {
        return (elm * 3).toString()
    })
    return a
}

console.log(entradasMultiplicadosPorTresString(array))

//c
let retornaParImpar = (a) => {
    a = a.map((elm, idx, arr) => {
        if (elm %2 === 0) {
            return `${elm} é par`
        } else {
            return `${elm} é impar`
        }
    })
    return a
}

console.log(retornaParImpar(array))

//3-
const pessoasParque = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let deixaEntrar = (a) => {
    a = a.filter((elm, idx, arr) => {
        return elm.altura >= 1.5
    })
    a = a.filter((elm, idx, arr) => {
        return elm.idade > 14 && elm.idade < 60
    })
    return a
}
console.log(deixaEntrar(pessoasParque))

let naoDeixaEntrar = (a) => {
    a = a.filter((elm, idx, arr) => {
        return !deixaEntrar(a).includes(elm)
    })
    return a
}
console.log(naoDeixaEntrar(pessoasParque))

//4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let emailsClientes = (a) => {
    let homens = a.filter((elm, idx, arr) => {
        return elm.genero === "masculino"
    })

    let mulheres = a.filter((elm, idx, arr) => {
        return elm.genero === "feminino"
    })
    
    let arrayEmails = []

    homens.forEach((elm, idx, arr) => {
        if (elm.cancelada) {
            arrayEmails.push(`Olá, Sr. ${elm.nome}. Infelizmente, sua consulta marcada para o dia ${elm.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        } else {
            arrayEmails.push(`Olá, Sr. ${elm.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${elm.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
        }
    })
        mulheres.forEach((elm, idx, arr) => {
            if (elm.cancelada) {
                arrayEmails.push(`Olá, Sra. ${elm.nome}. Infelizmente, sua consulta marcada para o dia ${elm.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
            } else {
                arrayEmails.push(`Olá, Sra. ${elm.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${elm.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
            }
    })
    return arrayEmails
}
console.log(emailsClientes(consultas))

//5
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

let atualizaContas = (a) => {
    let saldoTotal = 0
    a.forEach((elm, idx, arr) => {
        for (let i of elm.compras) {
            saldoTotal += i
        }
        elm.saldoTotal = elm.saldoTotal - saldoTotal
        
        saldoTotal = 0
    })
    return a
}
console.log(atualizaContas(contas))