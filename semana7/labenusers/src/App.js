import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const NomeUsuario = styled.li `
display: flex;
justify-content: space-between;
background-color: #fff;
max-width: 80vw;
min-width: 50vw;
border-radius: 8px;
margin-top: 6px;
`
const DivCadastro = styled.div `
border-radius: 8px;
min-width: 20vw;
min-height: 35vh;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
background-color: #636e72;
margin-top: 30px;
justify-content: space-around;
border-bottom: 5px solid #222f3e;
border-left: 3px solid #222f3e;
`
const DivGrande = styled.div `
display: flex;
align-items: flex-start;
flex-direction: column;
background-color: #0984e3;
height: 100vh;
`

const H2 = styled.h2 `
color: #fff;
`
const BotaoCriaUser = styled.button `
background-color: #20bf6b;
border: none;
height: 36px;
border-radius: 8px;
margin: 8px;
padding: 8px;
color: #fff;
font-weight: 400;
font-size: 1.2em;
outline: none;
cursor: pointer;
`

const Inputs = styled.input `
border: none;
height: 24px;
border-radius: 8px;
margin: 8px;
padding: 8px;
outline: none;
`

const BotaoMudaRenderiza = styled.button `
height: 35px;
background-color: #fc5c65;
border: none;
border-radius: 8px;
margin: 8px;
padding: 8px;
color: #fff;
font-weight: 400;
font-size: 1.2em;
outline: none;
cursor: pointer;
`
const DivUsuarioCadastrado = styled.div `
text-align: center;
margin: 8px;
padding: 8px;
font-weight: 700;
font-size: 1.5em;
`

const BotaoDeletaUser = styled.button `
background-color: #ff7675;
border: none;
border-radius: 8px;
margin: 15px;
color: #fff;
font-weight: 900;
font-size: 1.2em;
outline: none;
cursor: pointer;
`
const H3 = styled.h3 `
margin-left: 20px;
`
const DivListaCadastros = styled.div `
margin-left: 8px;
min-width: 35vw;
max-width: 35vw;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const DivPaginaLista = styled.div `
background-color: #0984e3;
min-height: 100vh;
`

class App extends React.Component {

  state = {
    renderiza: true,
    nameValue: "",
    emailValue: "",
    usuarios: []
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    headers: {
      Authorization: "airton-lopes-turing"
    }
  }).then(response => {
    window.alert("Usuario criado com sucesso!")
    this.pegarNome();
    this.setState({ nameValue: "", emailValue: ""})
  }).catch(error => {
    window.alert("O usuario nao foi criado! Verifique as informacoes!")
  })
}

onChangeNameValue = (event) => {
  this.setState({nameValue: event.target.value})
}

onChangeEmailValue = (event) => {
  this.setState({emailValue: event.target.value})
}

  componentDidMount = () => {
    this.pegarNome()
  }

  pegarNome = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "airton-lopes-turing"
          }
        }
      )
      .then(response => {
        this.setState({usuarios: response.data})
      })
      .catch(error => {
        console.log(error.data)
      })
  }

  deletaUsuario = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
    {
      headers: {
        Authorization: "airton-lopes-turing"
        }
    }
      )
      .then(response => {
        this.pegarNome()
        alert("O usuario foi deletado com sucesso!")
      })
      .catch(error => {
        alert("O usuario nao pode ser deletado!")
      })
    }

  mudaEstadoRenderiza = () => {
    this.setState({renderiza: !this.state.renderiza})
  }
  
  render() {
    const telaUm = (
    <DivGrande>
      <BotaoMudaRenderiza onClick={this.mudaEstadoRenderiza}>Ir para pagina de listas</BotaoMudaRenderiza>
      <DivCadastro>
            <H2>Cadastro:</H2>
           
            <Inputs
               value={this.state.nameValue}
               onChange={this.onChangeNameValue}
               type="text"
               placeholder="Digite seu nome"
            />

            <Inputs
               value={this.state.emailValue}
               onChange={this.onChangeEmailValue}
               type="text"
               placeholder="Digite seu e-mail"
            />
            
            <BotaoCriaUser onClick={this.criarUsuario}>Criar Usuario!</BotaoCriaUser>
        </DivCadastro>
    </DivGrande>)
    
    const telaDois = (<DivPaginaLista>
           <BotaoMudaRenderiza onClick={this.mudaEstadoRenderiza}>Ir para pagina de registro</BotaoMudaRenderiza>
            <DivListaCadastros>
          <H3>Usuarios cadastrados:</H3>
          <ul>
            {this.state.usuarios.map(usuario => {
              return <NomeUsuario key={usuario.id}>
                      <DivUsuarioCadastrado>{usuario.name}</DivUsuarioCadastrado><BotaoDeletaUser onClick={() => this.deletaUsuario(usuario.id)}>X</BotaoDeletaUser>
                      </NomeUsuario>
            })}
          </ul>
          </DivListaCadastros>
        </DivPaginaLista>)

          return (
            <>
              {this.state.renderiza ? telaUm : telaDois}
            </>
          )
    }

}

export default App;