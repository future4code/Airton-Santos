import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import AddPlaylists from './components/AddPlaylists/AddPlaylists';
import MusicsList from './components/MusicsLists/MusicsList';

const DivPrincipal = styled.div`
display: flex;
justify-content: center;
`

class App extends React.Component {
  render() {
  return (
    <DivPrincipal>
      <AddPlaylists />
      <MusicsList />
    </DivPrincipal>
  );
  }
}
export default App;