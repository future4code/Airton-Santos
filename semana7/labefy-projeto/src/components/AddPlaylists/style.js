import styled from 'styled-components'

export const AddPlaylistContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40vw;
    min-height: 70vh;
    margin: 50px;
    box-shadow: 0 0 8em #499EC9;
    > h2
        {
        color: #ffffff;
        }
`
export const AddPlaylistImput = styled.input `
    border-radius: 20px;
    width: 250px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.9em;
`
export const AddPlaylistButton = styled.button `
    border-radius: 20px;
    width: 270px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #499EC9;
    font-weight: 700;
    font-size: 1em;
        &:hover
        {
        color: #499EC9;
        background-color: #ffffff;
        transition: 500ms;
        box-shadow: 0 0 2em #499EC9;
        }
        &:active
        {
        color: #ffffff;
        background-color: #499EC9;
        transition: 500ms;
        box-shadow: 0 0 2em #ffffff;
        }
`
export const SpinnerLoading = styled.div`
    border: 8px solid rgba(0, 0, 0, 0.1);
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 30px;border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 500ms linear infinite;
    margin: 30px;
    @keyframes spin {
    to {
      transform: rotate(360deg)
    }
  }
  `

export const PlaylistName = styled.div `
width: 30vw;
padding: 16px;
border-radius: 20px;
outline: none;
border: none;
cursor: pointer;
color: #499EC9;
background-color: #ffffff;
font-weight: 700;
font-size: 1.5em;
display: flex;
align-items: center;
justify-content: space-between;
margin: 16px;
    &:hover
    {
    color: #ffffff;
    background-color: #499EC9;
    transition: 500ms;
    box-shadow: 0 0 1em #ffffff;
    }
    &:active
    {
    color: #499EC9;
    background-color: #ffffff;
    transition: 500ms;
    box-shadow: 0 0 1em #499EC9;
    }
`

export const DeletePlaylistButton = styled.button `
border-radius: 20px;
outline: none;
border: none;
cursor: pointer;
color: #499EC9;
background-color: #ffffff;
font-weight: 700;
font-size: 1em;
width: 30px;
height: 30px;
    &:hover
    {
    color: #ffffff;
    background-color: #ff7675;
    transition: 500ms;
    box-shadow: 0 0 1em #ffffff;

    }
    &:active
    {
    color: #499EC9;
    background-color: #ffffff;
    transition: 500ms;
    box-shadow: 0 0 1em #499EC9;
    }
`