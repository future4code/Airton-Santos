let arrayDespesa = []
let valor = document.getElementById("valor")
let tipo = document.getElementById("tipo")
let tipoFiltro = document.getElementById("tipo-filtro")
let valorMinimo = document.getElementById("valor-minimo-filtro")
let valorMaximo = document.getElementById("valor-maximo-filtro")
let descricao = document.getElementById("descricao")
let mostraDespesa = document.getElementById("relacao-despesas")
let relacaoDespesasDetalhadas = document.getElementById("relacao-despesas-detalhadas")
let extratoTotal = document.getElementById("total")

function cadastrarDespesa() {
    if (valor.value !== "" && tipo !== "default" && descricao !== "") {
        let objetoDespesa = {
        valor: Number(valor.value),
        tipo: tipo.value,
        descricao: descricao.value}
        
        arrayDespesa.push(objetoDespesa)
    
        mostraDespesa.innerHTML += `<div id="div-mostra-despesa">R$${objetoDespesa.valor},00 - ${objetoDespesa.tipo} - ${objetoDespesa.descricao}</div>`
        
        somarDespesas()
        
        valor.value = ""
        tipo.value = "default"
        descricao.value = ""
                
        } else alert("Este campo deve ser preenchido!");
}

function filtrar() {
    let arrayFiltrado = arrayDespesa.filter((e, i, a) => {
        return e.tipo === tipoFiltro.value && e.valor >= valorMinimo.value && e.valor <= valorMaximo.value
    })
    arrayFiltrado.forEach((e, i, a) => {
    relacaoDespesasDetalhadas.innerHTML += `<div id="div-relacao-despesas-detalhadas">R$${e.valor},00 - ${e.tipo} - ${e.descricao}</div>`
    })

    tipoFiltro.value = ""
    valorMinimo.value = ""
    valorMaximo.value = ""
}

function somarDespesas () {
    let soma = 0
    arrayDespesa.forEach((e, i, a) => {
    soma += e.valor
    })
    extratoTotal.innerHTML = `R$${soma},00`
}

function limparFiltros () {
    relacaoDespesasDetalhadas.innerHTML = ""
}    