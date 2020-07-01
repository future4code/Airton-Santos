import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AnimaLoading from '../images/wait.gif'


const axiosConfig = {
    headers: {
        Authorization: "airton-lopes-turing"
    }
}

const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"


const DeleteButton = styled.button `
background-color: red;
color: #fff;
border: none;
outline: none;
border-radius: 8px;
cursor: pointer;
`
const DivUsersList = styled.div `
display: flex;
flex-direction: column;
background-color: #3E7FF7;
min-width: 40vw;
min-height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 16px;
`
const H4 = styled.h4 `
display: flex;
background-color: #fff;
min-width: 300px;
max-width: 400px;
height: 36px;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 8px;
margin: 8px;
`
const Wait = styled.img `
width: 100px;
`

class  ListUsersPage extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    //FEITO COM ASYNC/AWAIT
    getAllUsers = async () => {
        try {
            const response = await axios.get(baseUrl, axiosConfig)
            this.setState({usersList: response.data})
        } catch (err) {
            console.log(err.message)
        }

        // axios.get(baseUrl, axiosConfig)
        // .then(response => {
        //     this.setState({usersList: response.data})
        // }).catch(err => {
        //     console.log(err.message)
        // })
    }

    //FEITO COM ASYNC/AWAIT    
    deleteUser = async (userId) => {
        try {
            await axios.delete(`${baseUrl}${userId}`, axiosConfig)
            this.getAllUsers()
            alert(`Usuario deletado com sucesso!`)
        } catch (err) {
            console.log(err.message)
        }

        // deleteUser = (userId) => {
        //     axios.delete(`${baseUrl}${userId}`, axiosConfig).then(() => {
        //         this.getAllUsers()
        //     }).catch(err => {
        //        console.log(err.message) 
        //     })
        // }
    }


render() {
    return (
        <DivUsersList>
            {this.state.usersList.length === 0 && <Wait src={AnimaLoading} />}
            {this.state.usersList.map(user=> {
                return <H4 key={user.id}>{user.name}<DeleteButton onClick={() => this.deleteUser(user.id)}>X</DeleteButton></H4>
            })}
        </DivUsersList>
        )
    }

}

export default ListUsersPage