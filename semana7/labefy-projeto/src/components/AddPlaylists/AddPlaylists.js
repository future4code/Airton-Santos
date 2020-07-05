import React from 'react';
import axios from 'axios'
import {AddPlaylistContainer, AddPlaylistImput, AddPlaylistButton} from './style'

class AddPlaylists extends React.Component {
  render() {
  return (
    <AddPlaylistContainer>
      <h2>Crie sua playlist</h2>
        <AddPlaylistImput
        type="text"
        placeholder="Digite o nome da nova playlist"
        />
        <AddPlaylistButton>Adicionar playlist</AddPlaylistButton>
    </AddPlaylistContainer>
  );
  }
}
export default AddPlaylists;