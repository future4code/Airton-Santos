function adicionaItem() {
    let meuInput = document.getElementById("meu-input")
    let item = meuInput.value

    let meuDia = document.getElementById("selecao-dias")
    let selecaoDias = meuDia.value

    let segunda = document.getElementById("option-segunda")
    let segundaFeira = segunda.value

    let terca = document.getElementById("option-terca")
    let tercaFeira = terca.value

    let quarta = document.getElementById("option-quarta")
    let quartaFeira = quarta.value

    let quinta = document.getElementById("option-quinta")
    let quintaFeira = quinta.value

    let sexta = document.getElementById("option-sexta")
    let sextaFeira = sexta.value

    let sabado = document.getElementById("option-sabado")
    let diaSabado = sabado.value

    let domingo = document.getElementById("option-domingo")
    let diaDomingo = domingo.value

    if (meuInput.value === "") {
        alert(`A tarefa nao pode ser um texto vazio!`)
    } if (selecaoDias === segundaFeira) {
    let tarefaDia = document.getElementById("dia-segunda")
    tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
    meuInput.value = ""
        } if (selecaoDias === tercaFeira) {
            let tarefaDia = document.getElementById("dia-terca")
            tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
            meuInput.value = ""
                } if (selecaoDias === quartaFeira) {
                    let tarefaDia = document.getElementById("dia-quarta")
                    tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
                    meuInput.value = ""
                        } if (selecaoDias === quintaFeira) {
                            let tarefaDia = document.getElementById("dia-quinta")
                            tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
                            meuInput.value = ""
                                } if (selecaoDias === sextaFeira) {
                                    let tarefaDia = document.getElementById("dia-sexta")
                                    tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
                                    meuInput.value = ""
                                        } if (selecaoDias === diaSabado) {
                                            let tarefaDia = document.getElementById("dia-sabado")
                                            tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
                                            meuInput.value = ""
                                            } if (selecaoDias === diaDomingo) {
                                                let tarefaDia = document.getElementById("dia-domingo")
                                                tarefaDia.innerHTML += `<li onclick="this.style.textDecoration = 'line-through'">${item}</li>`
                                                meuInput.value = ""
                                            }
                                        }

                                        function apagaTudo() {
                                            document.getElementsByTagName("ul")[0].innerHTML = ""
                                            document.getElementsByTagName("ul")[1].innerHTML = ""
                                            document.getElementsByTagName("ul")[2].innerHTML = ""
                                            document.getElementsByTagName("ul")[3].innerHTML = ""
                                            document.getElementsByTagName("ul")[4].innerHTML = ""
                                            document.getElementsByTagName("ul")[5].innerHTML = ""
                                            document.getElementsByTagName("ul")[6].innerHTML = ""
                                        }