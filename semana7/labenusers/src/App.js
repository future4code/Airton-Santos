import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const NomeUsuario = styled.li `
display: flex;
border-bottom: 2px solid black;
`
const DivCadastro = styled.div `
border-radius: 20px;
width: 20vw;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #74b9ff;

`
const DivGrande = styled.div `

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
    console.log(error.data)
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
    if (this.state.renderiza) {
      return (
    <DivGrande>
        <button onClick={this.mudaEstadoRenderiza}>Ir para pagina de listas</button>
        <DivCadastro>
            <h3>Cadastro:</h3>
           
            <input
               value={this.state.nameValue}
               onChange={this.onChangeNameValue}
               type="text"
               placeholder="Digite seu nome"
            />

            <input
               value={this.state.emailValue}
               onChange={this.onChangeEmailValue}
               type="text"
               placeholder="Digite seu e-mail"
            />
            
            <button onClick={this.criarUsuario}>Criar Usuario!</button>
        </DivCadastro>
    </DivGrande>
    )
        } else {
        return (
    <div>
        <div>
          <button onClick={this.mudaEstadoRenderiza}>Ir para pagina de registro</button>
          
        <h3>Usuarios cadastrados:</h3>
        <ul>
          {this.state.usuarios.map(usuario => {
            return <NomeUsuario key={usuario.id}>
                    {usuario.name}<button onClick={() => this.deletaUsuario(usuario.id)}>X</button>
                    </NomeUsuario>
          })}
        </ul>
        </div>
    </div>
      )  
    }
  }
}

export default App;