import React from 'react';
import axios from 'axios'
import {AddPlaylistContainer, AddPlaylistImput, AddPlaylistButton, SpinnerLoading, PlaylistName, DeletePlaylistButton} from './style'

const axiosConfig = {
  headers: {
      Authorization: "airton-lopes-turing"
  }
}

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

class AddPlaylists extends React.Component {
  state ={
    name: "",
    allPlaylists: []
  }

  componentDidMount = () => {
    this.getAllPlaylists()
}

  getAllPlaylists = () => {
    axios.get(baseUrl, axiosConfig)
    .then(response => {
        this.setState({allPlaylists: response.data.result.list})
    }).catch(err => {
        console.log(err.message)
    })
}

  createPlaylist = () => {
  const body = {
  name: this.state.name
  }
  axios.post(baseUrl, body, axiosConfig).then(() => {
  this.setState({name: ""})
  this.getAllPlaylists()
  }).catch(error => {
  alert(`A playlist nao foi criada, verifique os dados e tente novamente!`)
  })
}

  deletePlaylist = (playlistId) => {
      axios.delete(`${baseUrl}${playlistId}`, axiosConfig).then(() => {
          this.getAllPlaylists()
      }).catch(err => {
         console.log(err.message) 
      })
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
  return (
    <AddPlaylistContainer>
      <h2>Crie sua playlist</h2>
        <AddPlaylistImput
        type="text"
        maxlength="20"
        placeholder="Digite o nome da nova playlist"
        value={this.state.name}
        onChange={this.onChangeName}
        />
        <AddPlaylistButton onClick={this.createPlaylist}>Adicionar playlist</AddPlaylistButton>
        <div>
            {this.state.allPlaylists.length === 0 && <SpinnerLoading></SpinnerLoading>}
            {this.state.allPlaylists.map(playlists=> {
                return <PlaylistName onClick={() => this.props.onClickShowMusicsList(playlists.id)} key={playlists.id}>{playlists.name}<DeletePlaylistButton onClick={() => this.deletePlaylist(playlists.id)}>X</DeletePlaylistButton></PlaylistName>
            })}
        </div>
    </AddPlaylistContainer>
  );
  }
}
export default AddPlaylists;