import fs from 'fs'
//1-
//A-Com o process.argv
//B e C-
// const minhaIdade: number = Number(process.argv[2])
// const meuNome: string = process.argv[3]
// const minhaIdadeMaisSete: number = minhaIdade + 7

// console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos. Em sete anos você terá ${minhaIdadeMaisSete}`)

//2-
// const operacao: string = process.argv[2]
// const numeroUm: number = Number(process.argv[3])
// const numeroDois: number = Number(process.argv[4])
// let resultado: number = 0

// switch (operacao) {
//     case 'add': 
//     resultado = numeroUm + numeroDois
//     break;
//     case 'sub': 
//     resultado = numeroUm - numeroDois
//     break;
//     case 'mult': 
//     resultado = numeroUm * numeroDois
//     break;
//     case 'div': 
//     resultado = numeroUm / numeroDois
//     break;
// }

// console.log(`Resposta: ${resultado}`)

//3-
// const novaTarefa: string = process.argv[2]
// fs.appendFileSync('./tarefas.txt', novaTarefa)

// console.log(`Tarefa adicionada com sucesso!`)