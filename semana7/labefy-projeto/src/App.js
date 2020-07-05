import React from 'react';
import styled from 'styled-components'
import headset from './images/headset.png'
import axios from 'axios'
import AddPlaylists from './components/AddPlaylists/AddPlaylists';
import MusicsList from './components/MusicsLists/MusicsList';
import PlayerBox from './components/PlayerBox/PlayerBox';

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282828;
  width: 100vw;
  height: 100vh;
    > h1 {
      background-color: #121212;
      color: #ffffff;
      font-size: 2.5em;
      padding: 16px;
      border-radius: 20px 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 240px;
      box-shadow: 0 0 1em #499EC9;
        &:hover
        {
        background-color: #ffffff;
        transition: 500ms;
        box-shadow: 0 0 2em #ffffff;
        color: black;
        }
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
        <PlayerBox />
    </DivPrincipal>
  );
  }
}
export default App;