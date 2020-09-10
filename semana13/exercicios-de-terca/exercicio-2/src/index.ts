const operacao: string = process.argv[2]
const numeroUm: number = Number(process.argv[3])
const numeroDois: number = Number(process.argv[4])
let resultado: number = 0

switch (operacao) {
    case 'add': 
    resultado = numeroUm + numeroDois
    break;
    case 'sub': 
    resultado = numeroUm - numeroDois
    break;
    case 'mult': 
    resultado = numeroUm * numeroDois
    break;
    case 'div': 
    resultado = numeroUm / numeroDois
    break;
}

console.log(`Resposta: ${resultado}`)