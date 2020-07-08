import React from 'react';
import axios from 'axios'
import headset from './images/headset.png'
import AddPlaylists from './components/AddPlaylists/AddPlaylists';
import MusicsList from './components/MusicsLists/MusicsList';
import {DivPrincipal, ContainerPlaylistMusics} from './style'

const axiosConfig = {
  headers: {
      Authorization: "airton-lopes-turing"
  }
}

class App extends React.Component {
  state = {
    tracks: undefined,
    playlistAtual: "",
    showCreateMusic: false
  }

getPlaylistTracks = (id) => {
  this.setState({showCreateMusic: true})
  const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  this.setState({playlistAtual: id})
    axios.get(baseUrl, axiosConfig)
    .then(response => {
        this.setState({tracks: response.data.result.tracks})
    }).catch(err => {
        console.log(err.message)
    })
}

  render() {
  return (
    <DivPrincipal>
        <h1>
          <img src={headset} />Labefy
        </h1>
        <ContainerPlaylistMusics>
          <AddPlaylists onClickShowMusicsList={this.getPlaylistTracks} />
          <MusicsList showMusicsList={this.state.tracks} addMusicListsMusic={this.state.playlistAtual} showCreateMusic={this.state.showCreateMusic} onClickShowMusicsList={this.getPlaylistTracks} />
        </ContainerPlaylistMusics>
    </DivPrincipal>
  );
  }
}
export default App;