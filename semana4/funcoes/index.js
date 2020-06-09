//EXERCÍCIO 1
//a-[]
//b-(6) [0, 1, 0, 1, 2, 3]
//c-(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//EXERCÍCIO 2
//a-0
//2
//undefined
//b-Funcionaria, pois a funcao retornara o i, se nome for igual a i, independente se for string ou numero.

//EXERCÍCIO 3
//E uma funcao que retorna um array que o primeiro elemento deve retornar a soma dele pelo segundo elemento,
//e o elemento 2 deve retornar a multiplicacao dele pelo primeiro elemento. Ela poderia se chamar somaMultiplica.

//EXERCÍCIO 4
//a-
/*function idadeCachorro (idade) {
    const idadeCachorro = 7
    
    return idade * idadeCachorro
}
console.log(`A idade do cachorro em anos humanos e: ${idadeCachorro(3)}`)*/
//b-
/*function pessoa(nome, idade, endereco, estudante) {
    if (estudante === true) {
        estudante = `sou`
    } else {
        estudante = `nao sou`
    }
    let pessoa = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante} estudante.`)
    return pessoa
}
console.log(pessoa(`Airton`,33,`Rua soledade 29`, true))*/

//EXERCÍCIO 5
//1-2-3-
/*let seculo = (ano) => {
    let seculos = [`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`,`XII`,`XIII`,`XIV`,`XV`,`XVI`,`XVII`,`XVIII`,`XIX`,`XX`]
    let anos = [1,101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,1401,1501,1601,1701,1801,1901,2001,2101]

    for (let num = 0; num < 21; num++) {
        if (ano >= anos[num] && ano < anos[num+1])
        return `O ano ${ano} pertence ao século ${seculos[num]}`
    }
}

console.log(seculo(401))*/

//EXERCÍCIO 6
//a-
/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function arrayLength(array) {
    return array.length
}

console.log(arrayLength(array))*/

//b-
/*function parImpar(numero) {
    if (numero %2 ===0) {
    return true
} else {
    return false
}
}
console.log(parImpar(2))*/

//c-
/*function arrayParImpar(array) {
    let quantidadePar = 0
    let quantidadeImpar = 0
    for (let num of array) {
        if (num %2 ===0) {
            quantidadePar += 1
        } else {
            quantidadeImpar +=1
        }
    }
    return `A quantidade par e ${quantidadePar} e impares sao ${quantidadeImpar}`
}
console.log(arrayParImpar(array))*/

//d-
/*function arrayParImpar(array) {
    let quantidadePar = 0
    let quantidadeImpar = 0
    for (let num of array) {
        if (parImpar(num)) {
            quantidadePar += 1
        } else {
            quantidadeImpar +=1
        }
    }
    return `A quantidade par e ${quantidadePar} e impares sao ${quantidadeImpar}`

}
console.log(arrayParImpar(array))*/