import React from 'react';
import styled from 'styled-components'
import ImagemDatabase from '../images/database.png'
import CreateUserPage from './CreateUserPage'
import ListUsersPage from './ListUsersPage'

const DivPai = styled.div `
background-color: #A3BEFA;
display: flex;
`
const DivLateral = styled.div `
background-color: #3E7FF7;
border-right: 5px solid #003CAB;
border-radius: 0px 50px 0px 0px;
min-width: 25vw;
max-width: 40vw;
min-height: 80vh;
display: flex;
flex-direction: column;
padding-top: 20vh;
`
const DivPrincipal = styled.div `
margin: 100px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 16px;
`
const H1 = styled.h1 `
font-size: 1.8em;
text-align: center;
color: #fff;
font-weight: 600;
`
const Img = styled.img `
min-width: 15vw;
max-width: 20vw;
margin: 0 auto;
`
const ButtonChangePage = styled.button `
min-width: 15vw;
max-width: 20vw;
max-height: 5vh;
color: #fff;
background-color: #E9381C;
border: none;
outline: none;
cursor: pointer;
border-radius: 16px;
font-size: 1.5em;
margin-top: 8px;
margin-left: 16px;
`

class MainPage extends React.Component {
    state = {
      currentPage: "createUserPage"
    }
  
    changePage = () => {
      if (this.state.currentPage === "createUserPage") {
        this.setState({ currentPage: "listUsersPage" })
      } else {
        this.setState({ currentPage: "createUserPage" })
      }
    }
  

  render () {
    const page =
      this.state.currentPage === "createUserPage" ? (<CreateUserPage />) : (<ListUsersPage />)

    const buttonName =
      this.state.currentPage === "listUsersPage"
        ? "Ir para cadastro"
        : "Ir para lista"

  return (
    <DivPai>
      <DivLateral>
        <H1>Database system 2.0</H1>
        <Img src={ImagemDatabase} />
      </DivLateral>
        <ButtonChangePage onClick={this.changePage}>{buttonName}</ButtonChangePage>
        <DivPrincipal>
          {page}
        </DivPrincipal>
    </DivPai>
    )
  }
}

export default MainPage;
