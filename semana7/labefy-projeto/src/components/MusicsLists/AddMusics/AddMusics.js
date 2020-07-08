import React from 'react';
import axios from 'axios'
import {AddMusicsContainer, AddArtistImput, AddMusicsButton, AddLinkImput, AddNameMusicImput, RenderFormAddMusicButton, FormAddMusicContainer} from './style'

const axiosConfig = {
  headers: {
      Authorization: "airton-lopes-turing"
  }
}

class AddMusics extends React.Component {
  state = {
    renderFormAddMusic: false,
    name: "",
    artist: "",
    url: ""
  }

  createMusic = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.addMusicListsMusic}/tracks`, body, axiosConfig).then(() => {
    this.setState({name: "", artist: "", url: ""})
    this.props.onClickShowMusicsList(this.props.addMusicListsMusic)
    }).catch(error => {
    alert(`A musica nao foi adicionada, verifique os dados e tente novamente!`)
    })
  }

    onClickRenderFormAddMusic = () => {
      this.setState({renderFormAddMusic: !this.state.renderFormAddMusic})
    }

    onChangeArtist = event =>{
      this.setState({artist: event.target.value})
  }

    onChangeName = event =>{
      this.setState({name: event.target.value})
}

    onChangeUrl = event =>{
      this.setState({url: event.target.value})
}

  render() {
  return (
    <AddMusicsContainer>
        <RenderFormAddMusicButton
          onClick={this.onClickRenderFormAddMusic}>
          Adicione sua musica
        </RenderFormAddMusicButton>
        {this.state.renderFormAddMusic &&
        <FormAddMusicContainer>
          <AddArtistImput
          type="text"
          placeholder="Digite o nome do artista/banda"
          value={this.state.artist}
          onChange={this.onChangeArtist}
          />
          <AddNameMusicImput
          type="text"
          placeholder="Digite o nome da musica"
          value={this.state.name}
          onChange={this.onChangeName}
          />
          <AddLinkImput
          type="text"
          placeholder="Adicione a url da musica"
          value={this.state.url}
          onChange={this.onChangeUrl}
          />
          <AddMusicsButton
          onClick={this.createMusic}
          >Adicionar musica</AddMusicsButton>
        </FormAddMusicContainer>}
    </AddMusicsContainer>
  );
  }
}
export default AddMusics;