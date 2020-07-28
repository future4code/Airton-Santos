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
    test("Botao Apagar e clicado", () => {
        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText("Novo post")
        const addButton = getByText(/Adicionar/)

        fireEvent.change(input, { target: { value: "post test" }})
        fireEvent.click(addButton)

        const deleteButton = getByText(/apag/i)
        fireEvent.click(deleteButton)

        expect(getByText(/Nao ha posts/i)).toBeInTheDocument()
    })

})