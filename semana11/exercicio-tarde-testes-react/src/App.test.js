import React from "react";
import { render, fireEvent, getByDisplayValue, getByText } from "@testing-library/react";
import App from "./App";

//EXERCICIO 1
describe("Ao digitar no campo novo post e clicar em adicionar", () => {
    test("É esperado que o post apareça na tela", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")

        fireEvent.change(input, { target: { value: "post test" }})

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByText(/post test/)).toBeInTheDocument()
    })
})


//EXERCICIO 2
describe("Ao clicar no botao curtir", () => {
    test("É esperado que o botão 'Descurtir' apareça", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        const likeButton = getByText(/Curtir/i)

        fireEvent.click(likeButton)

        expect(getByText(/post test/)).toBeInTheDocument()
        expect(getByText(/Descurtir/i)).toBeInTheDocument()
    })
})

//EXERCICIO 3
describe("Ao clicar no botao Apagar", () => {
    test("É esperado que a mensagem Nenhum post apareça na tela", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        const deleteButton = getByText(/apag/i)
        fireEvent.click(deleteButton)

        expect(getByText(/Nenhum post/i)).toBeInTheDocument()
    })
})

//EXERCICIO 4
describe("Ao adicionar um post", () => {
    test("É esperado que o campo de input volte a ficar limpo", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")

        fireEvent.change(input, { target: { value: "post test" }})

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByPlaceholderText("Novo post")).toBeInTheDocument()
    })
})

//EXERCICIO 5
describe("No inicio, quando nao tem nenhum post na tela", () => {
    test("É esperado que a mensagem Nenhum post apareça na tela", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        expect(getByText(/Nenhum post/i)).toBeInTheDocument()
    })
})

//EXERCICIO 6
describe("Quando o usuario adicionar um post", () => {    
    test("É esperado que a mensagem 'Quantidade de posts: 1' apareça", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        expect(getByText("Quantidade de posts: 1")).toBeInTheDocument()
    })
})

//EXERCICIO 7
describe("Quando o usuario tenta adicionar um post vazio", () => {    
    test("É esperado que a mensagem 'O post nao pode ser vazio' apareça", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "" }})
        fireEvent.click(addButton)

        expect(getByText("O post nao pode ser vazio")).toBeInTheDocument()
    })
})