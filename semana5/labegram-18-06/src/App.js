import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
    state = {
        postDaPessoa: [{
                nomeUsuario: 'paulinha',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            },

            {
                nomeUsuario: 'Soter',
                fotoUsuario: 'https://picsum.photos/50/51',
                fotoPost: 'https://picsum.photos/200/151'
            },

            {
                nomeUsuario: 'Severo',
                fotoUsuario: 'https://picsum.photos/50/52',
                fotoPost: 'https://picsum.photos/200/152'
            }
        ]

        valorInputNome: "",
        valorInputTitulo: "",
        valorInputTexto: ""
    }

    adicionaPost = () => {
        const novoPostDaPessoa = {
            nome: this.state.valorInputNome,
            titulo: this.state.valorInputTitulo,
            texto: this.state.valorInputTexto
        }

        const novoPost = [...this.state.postDaPessoa, novoPostDaPessoa]

        this.setState({})

    }

    render() {

        const dadosPost = this.state.postDaPessoa.map((dado) => {
            return ( <
                div >
                <
                p > { dado.nomeUsuario } < /p> <
                img src = { dado.fotoUsuario }
                /> <
                img src = { dado.fotoPost }
                /> <
                /div>
            )
        })
        return ( <
            div className = { 'app-container' } >
            <
            div > { dadosPost } <
            /div> <
            /div>
        );
    }
}

export default App;