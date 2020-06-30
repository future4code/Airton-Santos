import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const NomeUsuario = styled.li `
display: flex;
justify-content: space-between;
border-bottom: 2px solid black;
width: 30vw;
`
const DivCadastro = styled.div `
border-radius: 8px;
width: 20vw;
height: 35vh;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
background-color: #74b9ff;
margin-top: 30px;
justify-content: space-around;
`
const DivGrande = styled.div `
display: flex;
align-items: flex-start;
flex-direction: column;
`

const H2 = styled.h2 `
color: #fff;
`
const BotaoCriaUser = styled.button `
background-color: #ff7675;
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
height: 50px;
background-color: #ff7675;
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
border: 2px solid black;
border-radius: 8px;
margin-left: 8px;
width: 35vw;
`

class App extends React.Component {

  state = {
    renderiza: false,
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
    
    const telaDois = (<div>
         <div>
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
        </div>
    </div>)

          return (
            <>
              {this.state.renderiza ? telaUm : telaDois}
            </>
          )
    }

}

export default App;