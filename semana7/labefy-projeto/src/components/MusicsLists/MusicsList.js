import React from 'react';
import axios from 'axios'
import AddMusics from './AddMusics/AddMusics'
import {MusicsListContainer, MusicDetails, MusicName, ArtistName, MusicPlayer, MusicCard} from './style'

class MusicsList extends React.Component {
  
  render() {
    const musics = this.props.showMusicsList ? this.props.showMusicsList.map((musics) => {
      return <div><MusicCard><MusicName>{musics.name}</MusicName><ArtistName>{musics.artist}</ArtistName><MusicPlayer src={musics.url} controls></MusicPlayer></MusicCard></div>
    }) : ""
  return (
    <MusicsListContainer>
        <h1>Musicas:</h1>
        <MusicDetails>
          {musics}
        </MusicDetails>
        {this.props.showCreateMusic && <AddMusics addMusicListsMusic={this.props.addMusicListsMusic} onClickShowMusicsList={this.props.onClickShowMusicsList} />}
    </MusicsListContainer>
  );
  }
}
export default MusicsList;