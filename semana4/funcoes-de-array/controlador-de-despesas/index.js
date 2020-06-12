function cadastrarDespesa() {
    let valor = document.getElementById("valor")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")

    let objetoDespesa = {
        valor: parseInt(valor.value),
        tipo: tipo.value,
        descricao: descricao.value
    }
    arrayDespesa.push(objetoDespesa)

    let mostraDespesa = document.getElementById("relacao-despesas")
    if (objetoDespesa.valor === "" || objetoDespesa.tipo === "" || objetoDespesa.descricao === "") {
     alert("Este campo deve ser preenchido!")   
    } else {
    mostraDespesa.innerHTML += `<div class="div-mostra-despesa">R$${objetoDespesa.valor},00 - ${objetoDespesa.tipo} - ${objetoDespesa.descricao}</div>`
    valor.value = ""
    tipo.value = ""
    descricao.value = ""
    }
}

let arrayDespesa = []

const somaValoresArray = arrayDespesa.map((soma, i, arr) => {
    return soma.valor
})

console.log(somaValoresArray)