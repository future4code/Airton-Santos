import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    renderiza: false,
    nome: "",
    email: "",
    usuarios: []
  }

  componentDidMount = () => {
    this.pegarNome()
  }

  pegarNome = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
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

  mudaEstadoRenderiza = () => {
    this.setState({renderiza: !this.state.renderiza})
  }

  onChangeNome = (event) => {
    this.setState({nome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  
  render() {
  return (
    <div>
        <button onClick={this.mudaEstadoRenderiza}>Ir para pagina de listas</button><hr />
        <h3>Cadastro:</h3>
        <input
        value={this.state.nome}
        onChange={this.onChangeNome}
        type="text"
        placeholder="Digite seu nome"
        />

        <input
        value={this.state.email}
        onChange={this.onChangeEmail}
        type="text" placeholder="Digite seu e-mail"
        />

        <button onClick={this.enviaCadastro}>Enviar!</button>
        <hr />
        Usuarios cadastrados:
        <div>
          {this.state.usuarios.map(usuario => {
            return <p>{usuario.name}</p>
          })}
        </div>
      </div>
    
    )
  }
}

export default App;
