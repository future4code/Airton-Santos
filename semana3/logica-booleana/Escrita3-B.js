let quantosQW = prompt ("Quantos quilowatt-hora sua casa consumiu?")
let qw = 0.05
let desconto = prompt ('Digite aqui o percentual de desconto da fatura:')
let valorFinal = (quantosQW) * (qw)
let ValorFinalDesconto = (valorFinal) / (100) * (desconto)
let valorFinalMesmo = valorFinal - ValorFinalDesconto
let valorTotalComDesconto = ('O valor total da fatura com desconto é R$')
let mensagenFinal = valorTotalComDesconto + valorFinalMesmo
console.log(mensagenFinal)