import React from 'react'
import styled from 'styled-components'

const DeleteButton = styled.button `
background-color: red;
color: #fff
`

class  ListUsersPage extends React.Component {
    state = {
        usersList: [
            {
                id: "1",
                name: "batman"
            },
            {
                id: "2",
                name: "Severo"
            }
        ]
    }

render() {
    return (
        <ul>
            {this.state.usersList.map(user=> {
                return <li>{user.name}<DeleteButton>X</DeleteButton></li>
            })}
        </ul>
        )
    }

}

export default ListUsersPage