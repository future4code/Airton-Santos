import styled from 'styled-components'


export const DivPrincipal = styled.div`
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
export const ContainerPlaylistMusics = styled.div`
  display: flex;
  justify-content: space-around;
`