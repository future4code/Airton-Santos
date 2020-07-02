import React from 'react';
import styled from 'styled-components'

const DivPrincipal = styled.div `
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-size: calc(10px + 2vmin);
color: white;
`
const ImgMeme = styled.img `
max-width: 80vw;
max-height: 70vh;
`
const ButtonGeraMeme = styled.button `
margin-bottom: 10vh;
`
const H5 = styled.h5 `
text-align: center;
`

class App extends React.Component {
  state = {
    meme: "",
    "memes": [
              {
                "id": "131087935",
                "name": "Running Away Balloon",
                "url": "https://i.imgflip.com/261o3j.jpg",
                "width": 761,
                "height": 1024,
                "box_count": 5
              }
            ]
  }

  
  renderizaMeme = () => {
  const meme = this.state.memes.map(imagem => {
    return <ImgMeme src={imagem.url} />
  })
  this.setState({meme: meme})
}

  render() {

  return (
    <DivPrincipal>
      <H5>Clique no botao abaixo para gerar um template aleatorio para seus memes!</H5>
      <ButtonGeraMeme onClick={this.renderizaMeme}>GERAR</ButtonGeraMeme>
      <div>{this.state.meme}</div>
    </DivPrincipal>
  );
  }
}

export default App;
