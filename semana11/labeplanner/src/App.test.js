import React from 'react';
import { render, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios'

describe("O usuario e capaz de ver o input", () => {
  test("É esperado que o input esteja na tela", () => {
      const {getByPlaceholderText} = render(<App />)

      const input = getByPlaceholderText(/tarefa/i)

      expect(input).toBeInTheDocument()
  })
})

describe("O usuario e capaz de escrever no campo de input", () => {
  test("É esperado que o usuario consiga escrever no input", async () => {
    const {getByPlaceholderText} = render(<App />)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    await userEvent.type(input, "input test")

    expect(input).toBeInTheDocument(/input test/i)
  })
})

describe("O usuario e capaz de adicionar tarefa", () => {
  test("É esperado que o usuario consiga adicionar uma tarefa na Segunda", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        text: "add task test",
        day: "Segunda-Feira"
      }]
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App />)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()

    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()
    
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    
    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Segunda-Feira")
    userEvent.click(addButton)

        expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Segunda-Feira"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/")
      const taskAppears = getByText("add task test")
      expect(taskAppears).toBeInTheDocument()
    })
  })
  
  test("É esperado que o usuario consiga adicionar uma tarefa na Terca", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Terça-Feira")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Terça-Feira"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
  
  test("É esperado que o usuario consiga adicionar uma tarefa na Quarta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Quarta-Feira")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Quarta-Feira"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
  
  test("É esperado que o usuario consiga adicionar uma tarefa na Quinta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Quinta-Feira")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Quinta-Feira"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
  
  test("É esperado que o usuario consiga adicionar uma tarefa na Sexta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Sexta-Feira")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Sexta-Feira"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
  
  test("É esperado que o usuario consiga adicionar uma tarefa no Sabado", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Sábado")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Sábado"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })

  
  test("É esperado que o usuario consiga adicionar uma tarefa no Domingo", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    const {getByPlaceholderText, getByText, getByTitle} = render(<App/>)

    const input = getByPlaceholderText(/tarefa/i)
    expect(input).toBeInTheDocument()
    const addButton = getByText(/adicionar tarefa/i)
    expect(addButton).toBeInTheDocument()
    const select = getByTitle(/dayChoice/i)
    expect(select).toBeInTheDocument()

    await userEvent.type(input, "add task test")
    userEvent.selectOptions(select, "Domingo")
    userEvent.click(addButton)

      expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/", {
        text: "add task test",
        day: "Domingo"
    })
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })

})

describe("O usuario e capaz de deletar tarefa", () => {
  test("É esperado que o usuario consiga deletar uma tarefa na Segunda", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Segunda-Feira"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Terca", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Terça-Feira"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Quarta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Quarta-Feira"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Quinta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Quinta-Feira"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Sexta", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Sexta-Feira"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Sabado", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Sábado"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

  test("É esperado que o usuario consiga deletar uma tarefa na Domingo", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: "1",
        text: "add task test",
        day: "Domingo"
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {findByText} = render(<App/>)
    
    const deleteButton = await findByText("X")
    expect(deleteButton).toBeInTheDocument("X")

    userEvent.click(deleteButton)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    await wait(() => {expect(axios.get).toHaveBeenCalledTimes(2)})
  })

})