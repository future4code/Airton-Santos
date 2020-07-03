import React from 'react';
import axios from 'axios'
import {AddPlaylistContainer} from './style'

class AddPlaylists extends React.Component {
  render() {
  return (
    <AddPlaylistContainer>
        <input
        type="text"
        placeholder="Digite o nome da nova playlist"
        />
        <button>
            Adicionar playlist!
        </button>
    </AddPlaylistContainer>
  );
  }
}
export default AddPlaylists;