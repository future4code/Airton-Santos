import React from 'react';
import axios from 'axios'
import AddMusics from './AddMusics/AddMusics'
import {MusicsListContainer} from './style'

class MusicsList extends React.Component {
  render() {
  return (
    <MusicsListContainer>
        <h1>Musicas:</h1>
        <AddMusics />
    </MusicsListContainer>
  );
  }
}
export default MusicsList;