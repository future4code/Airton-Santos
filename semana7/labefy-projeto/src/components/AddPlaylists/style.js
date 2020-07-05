import styled from 'styled-components'

export const AddPlaylistContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 40vw;
    min-height: 30vh;
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
`