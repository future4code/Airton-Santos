function postarPost() {
    let titulo = document.getElementById("titulo")
    let autor = document.getElementById("autor")
    let post = document.getElementById("conteudo")
    let objetoPost = {
        titulo: titulo.value,
        autor: autor.value,
        post: post.value
    }
    let meuPost = document.getElementById("meu-post")
    meuPost.innerHTML += `<div class="div-post"><h2>${objetoPost.titulo}</h2><li>${objetoPost.autor}</li><p>${objetoPost.post}</p></div>`
}
