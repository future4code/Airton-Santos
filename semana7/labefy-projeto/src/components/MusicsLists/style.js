import styled from 'styled-components'

export const MusicsListContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40vw;
    min-height: 70vh;
    margin: 50px;
    box-shadow: 0 0 8em #499EC9;
    > h1
        {
        color: #fff;
        }
`
export const MusicDetails = styled.div`
    width: 30vw;
    font-weight: 700;
    display: flex;
    flex-direction: column;
`
export const MusicName = styled.div`
    font-size: 1.5em;
    margin: 8px;
`
export const ArtistName = styled.div`
    margin: 8px;
    font-size: 1em;
`
export const MusicPlayer = styled.audio`
    margin: 8px;
    width: 97%;
    outline: none;
`

export const MusicCard = styled.div`
    padding: 8px;
    color: #ffffff;
    background-color: #499EC9;
    margin: 8px;
    border-radius: 20px;
`