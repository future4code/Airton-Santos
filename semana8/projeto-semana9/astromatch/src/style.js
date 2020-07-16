import styled from 'styled-components';

export const MainScreen = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
export const AppContainer = styled.div `
    min-width: 400px;
    min-height: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0em 0em 10em -2em red;
    border-radius: 5px;
    background-color: #ffffff;
`
export const AppHeader = styled.div `
    max-width: 400px;
    min-width: 400px;
    max-height: 45px;
    min-height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    border-bottom: 1px solid #bdc3c7;
`
export const AppTitle = styled.img `
    max-width: 150px;
    position: relative;
    top: 5px;
`
export const Button1 = styled.span `
    position: relative;
    top: -30px;
    right: 160px;
    cursor: pointer;
`
export const Button2 = styled.span `
    position: relative;
    top: -30px;
    left: 160px;
    cursor: pointer;
`