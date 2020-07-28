import React from "react";
import { render, fireEvent, getByDisplayValue, getByText } from "@testing-library/react";
import App from "./App";

describe("Ao digitar no campo novo post e clicar em adicionar, e esperado que apareca um post com o que o usuario digitou", () => {
    test("Input existe na tela", () => {
        
        const {getByPlaceholderText} = render(<App />)

        const input = getByPlaceholderText("Novo post")

        expect(input).toBeInTheDocument()
    })

    test("Botao existe na tela", () => {
        const {getByText} = render(<App />)

        expect(getByText(/Adicionar/)).toBeInTheDocument()
    })

    test("Post aparece na tela", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")

        fireEvent.change(input, { target: { value: "post test" }})

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByText(/post test/)).toBeInTheDocument()
    })

    test("O input e limpo apos o usuario clicar em Adicionar", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")

        fireEvent.change(input, { target: { value: "post test" }})

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByPlaceholderText("Novo post")).toBeInTheDocument()
    })
})

describe("Ao clicar no botao curtir, o botao deve mudar para descurtir", () => {
    test("Botao curtir e clicado", () => {
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

describe("Ao clicar no botao Apagar, deve aparecer a mensagem: Nao ha posts", () => {
    test("Botao Apagar e clicado e a mensagem Nenhum post aparece na tela", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        const deleteButton = getByText(/apag/i)
        fireEvent.click(deleteButton)

        expect(getByText(/Nenhum post/i)).toBeInTheDocument()
    })
    
    test("Quando o usuario adicionar um post a mensagem 'Quantidade de posts: 1' deve aparecer", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        expect(getByText("Quantidade de posts: 1")).toBeInTheDocument()
    })
    
    test("Quando o usuario tenta adicionar um post vazio a mensagem 'O post nao pode ser vazio' deve aparecer", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "" }})
        fireEvent.click(addButton)

        expect(getByText("O post nao pode ser vazio")).toBeInTheDocument()
    })

})