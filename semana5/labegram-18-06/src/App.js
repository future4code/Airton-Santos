import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const ImputPost = styled.input `
    padding: 8px;
    display: flex;
    text-align: center;
    margin: 5px;
`
const Button = styled.button `
    padding: 8px;
    display: flex;
    text-align: center;
`
const Header = styled.div `
    width: 100%;
    height: 80px;
    background-color: #5592EB;
    text-align: center;
`
const HeaderH1 = styled.h1 `
    color: #fff;
`
const DivPosts = styled.div `
    margin: 0 auto;
`
const DivInputs = styled.div `
    background-color: #5592EB;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5%;
    margin: 10px 0px;
`

class App extends React.Component {
    state = {
        postDaPessoa: [
            {nomeUsuario: 'paulinha',
             fotoUsuario: 'https://picsum.photos/50/50',
             fotoPost: 'https://picsum.photos/200/150'},

            {nomeUsuario: 'Soter',
             fotoUsuario: 'https://picsum.photos/50/51',
             fotoPost: 'https://picsum.photos/200/151'},

            {nomeUsuario: 'Severo',
             fotoUsuario: 'https://picsum.photos/50/52',
             fotoPost: 'https://picsum.photos/200/152'}
        ],

        valorInputNomeUsuario: '',
        valorInputFotoUsuario: '',
        valorInputFotoPost: ''
    }

    adicionaPost = () => {
        const novoPostDaPessoa = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            fotoUsuario: this.state.valorInputFotoUsuario,
            fotoPost: this.state.valorInputFotoPost
        }
        
        const novoPost = [...this.state.postDaPessoa, novoPostDaPessoa]

        this.setState({ postDaPessoa: novoPost })
        }

    onChangeInputNomeUsuario = event => {
        this.setState({valorInputNomeUsuario: event.target.value})
    }

    onChangeInputFotoUsuario = event => {
        this.setState({valorInputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = event => {
        this.setState({valorInputFotoPost: event.target.value})
    }

    render() {
        const postAtualizado = this.state.postDaPessoa.map((dado) => {
        return (
            <Post
                nomeUsuario={dado.nomeUsuario}
                fotoUsuario={dado.fotoUsuario}
                fotoPost={dado.fotoPost}
            />
        )
        })

        return (
        <div className={'app-container'}>
            <Header>
                    <HeaderH1>LABEGRAM</HeaderH1>
            </Header>
            <DivPosts>
                <DivInputs>
                    <ImputPost  value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputNomeUsuario} placeholder={"Nome"}/>
                    <ImputPost  value={this.state.valorInputFotoUsuario} onChange={this.onChangeInputFotoUsuario} placeholder={"Link da foto"}/>
                    <ImputPost  value={this.state.valorInputFotoPost} onChange={this.onChangeInputFotoPost} placeholder={"Link da foto"}/>
                    <Button onClick={this.adicionaPost}>Share!</Button>
                </DivInputs>
                <div>{postAtualizado}</div>
            </DivPosts>
        </div>
        )
    }
}

export default App;