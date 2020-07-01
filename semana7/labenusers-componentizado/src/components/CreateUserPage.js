import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const axiosConfig = {
    headers: {
        Authorization: "airton-lopes-turing"
    }
}

const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


class CreateUserPage extends React.Component {
    state = {
        name: "",
        email: ""
    }

    createUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }
    }

    // const createUsers = async () => {
    //     try {
    //         const response = await axios.post(baseUrl, body, axiosConfig)
    //         alert(`Usuario criado com sucesso!`)
    //         this.setState({name: "", email: ""})
    //     }

    //     catch (err) {
    //         alert(`Erro ao criar usuario! Verifique as informacoes!`)
    //     }
    // }

    onChangeName = event => {
        this.setState({name: event.target.value})
    }

    onChangeEmail = event =>{
        this.setState({email: event.target.value})
    }

  render () {
  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Usuário"
        value={this.state.name}
        onChange={this.onChangeName}
      />
      <input
        type="email"
        placeholder="Email do Usuário"
        value={this.state.email}
        onChange={this.onChangeEmail}
      />
      <button onClick={this.createUser}>Enviar Cadastro</button>
    </div>
    )
  }
}

export default CreateUserPage
