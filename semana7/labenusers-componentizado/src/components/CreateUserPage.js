import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Imputs = styled.input `
height: 32px;
margin: 12px;
border: none;
outline: none;
border-radius: 16px;
font-size: 1.2em;
padding-left: 16px;
`
const ButtonCreateUser = styled.button `
background-color: #54B035;
height: 32px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
border-radius: 16px;
font-size: 1.2em;
padding: 0px 16px;
`
const DivForm = styled.div `
display: flex;
flex-direction: column;
background-color: #3E7FF7;
min-width: 30vw;
min-height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 16px;
`


const axiosConfig = {
    headers: {
        Authorization: "airton-lopes-turing"
    }
}

const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"


class CreateUserPage extends React.Component {
    state = {
        name: "",
        email: ""
    }

    //FEITO COM ASYNC/AWAIT
    createUser = async () => {
      try {
        const body = {
        name: this.state.name,
        email: this.state.email
    }
          await axios.post(baseUrl, body, axiosConfig)
          alert(`Usuario criado com sucesso!`)
          this.setState({name: "", email: ""})
      } catch (err) {
          alert(`O usuario nao foi criado, verifique os dados e tente novamente!`)
      }
      
        // const body = {
        //     name: this.state.name,
        //     email: this.state.email
        // }
        // axios.post(baseUrl, body, axiosConfig).then(() => {
        //   alert(`Usuario criado com sucesso!`)
        //   this.setState({name: "", email: ""})
        // }).catch(error => {
        //   alert(`O usuario nao foi criado, verifique os dados e tente novamente!`)
        // })
    }

    onChangeName = event => {
        this.setState({name: event.target.value})
    }

    onChangeEmail = event =>{
        this.setState({email: event.target.value})
    }

  render () {
  return (
    <DivForm>
      <Imputs
        type="text"
        placeholder="Nome do Usuário"
        value={this.state.name}
        onChange={this.onChangeName}
      />
      <Imputs
        type="email"
        placeholder="Email do Usuário"
        value={this.state.email}
        onChange={this.onChangeEmail}
      />
      <ButtonCreateUser onClick={this.createUser}>Enviar Cadastro</ButtonCreateUser>
    </DivForm>
    )
  }
}

export default CreateUserPage
