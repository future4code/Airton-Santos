import React from 'react';
import axios from 'axios'
import {AddMusicsContainer, AddArtistImput, AddMusicsButton, AddLinkImput, AddNameMusicImput, RenderFormAddMusicButton, FormAddMusicContainer} from './style'

class AddMusics extends React.Component {
  state = {
    renderFormAddMusic: false
  }

    onClickRenderFormAddMusic = () => {
      this.setState({renderFormAddMusic: !this.state.renderFormAddMusic})
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
          />
          <AddNameMusicImput
          type="text"
          placeholder="Digite o nome da musica"
          />
          <AddLinkImput
          type="text"
          placeholder="Adicione a url da musica"
          />
          <AddMusicsButton>Adicionar musica</AddMusicsButton>
        </FormAddMusicContainer>}
    </AddMusicsContainer>
  );
  }
}
export default AddMusics;