import styled from 'styled-components'

export const AddMusicsContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    > h2
        {
        color: #ffffff;
        }
`
export const AddArtistImput = styled.input `
    border-radius: 20px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.9em;
`
export const AddNameMusicImput = styled.input `
    border-radius: 20px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.9em;
`
export const AddLinkImput = styled.input `
    border-radius: 20px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.9em;
`
export const AddMusicsButton = styled.button `
    border-radius: 20px;
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
`

export const RenderFormAddMusicButton = styled.button `
    border-radius: 20px;
    padding: 8px;
    outline: none;
    border: none;
    margin-bottom: 8px;
    cursor: pointer;
    color: #499EC9;
    background-color: #ffffff;
    font-weight: 700;
    font-size: 1em;
        &:hover
        {
        color: #ffffff;
        background-color: #499EC9;
        transition: 500ms;
        box-shadow: 0 0 1em #ffffff;
        }
`
export const FormAddMusicContainer = styled.div `
    display: flex;
    flex-direction: column;
`