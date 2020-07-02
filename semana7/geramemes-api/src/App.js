import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const DivPrincipal = styled.div `
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-size: calc(10px + 2vmin);
color: white;
`
const DivSecundaria = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
const ImgPokemon = styled.img `
max-width: 80vw;
max-height: 70vh;
`
const ButtonGeraPokemon = styled.button `
margin-bottom: 10vh;
font-weight: bold;
color:#fff;
font-size: 0.8em;
background-color: green;
outline: none;
cursor: pointer;
border: none;
border-radius: 8px;
`
const H5 = styled.h5 `
text-align: center;
`

class App extends React.Component {
  state = {
    imgPokemon: "",
    pokemonList: [],
    numeroAleatorio: 5,
    todosPokemons: [],
    namePokemon: ""
  }


  componentDidMount = () => {
    this.guardaPokemons()
    this.exibePokemon()
  };  
  
  guardaPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=500`)
      .then(response => {
        this.setState({ todosPokemons: response.data.results});
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  exibePokemon = () => {
    let min = 1
    let max = 500
    let rand = min + Math.floor(Math.random() * (max-min))

    console.log(rand)

   axios
  .get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
  .then(response => {
    this.setState({ imgPokemon: response.data.sprites.front_default});
    this.setState({ namePokemon: response.data.name});
  })
  .catch(err => {
    console.log(err.message);
  });
}
  render() {

  return (
    <DivPrincipal>
      <H5>Clique no botao abaixo para gerar uma foto de pokemon aletorio!</H5>
      <ButtonGeraPokemon onClick={this.exibePokemon}>GERAR</ButtonGeraPokemon>
      <DivSecundaria>
        <img src={this.state.imgPokemon} alt="pokemon" />
        <h4>{this.state.namePokemon}</h4>
      </DivSecundaria>
    </DivPrincipal>
  );
  }
}

export default App;
