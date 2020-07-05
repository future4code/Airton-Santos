import React from 'react';
import headset from './images/headset.png'
import AddPlaylists from './components/AddPlaylists/AddPlaylists';
import MusicsList from './components/MusicsLists/MusicsList';
import {DivPrincipal, ContainerPlaylistMusics} from './style'

class App extends React.Component {
  state = {

  }

  render() {
  return (
    <DivPrincipal>
        <h1>
          <img src={headset} />Labefy
        </h1>
        <ContainerPlaylistMusics>
          <AddPlaylists />
          <MusicsList />
        </ContainerPlaylistMusics>
    </DivPrincipal>
  );
  }
}
export default App;