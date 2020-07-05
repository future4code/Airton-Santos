import React from 'react';
import styled from 'styled-components'
import headset from './images/headset.png'
import axios from 'axios'
import AddPlaylists from './components/AddPlaylists/AddPlaylists';
import MusicsList from './components/MusicsLists/MusicsList';

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282828;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
    > h1 {
      background-color: #121212;
      color: #ffffff;
      padding: 8px;
      border-radius: 20px 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 160px;
      box-shadow: 0 0 1em #499EC9;
      }
`
const ContainerPlaylistMusics = styled.div`
  display: flex;
  justify-content: space-around;
`

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