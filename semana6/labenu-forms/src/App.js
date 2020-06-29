import React from 'react';
import './App.css';
import styled from 'styled-components'
import Formulario1 from './components/Formulario1'
import Formulario2 from './components/Formulario2'
import Formulario3 from './components/Formulario3'
import FormularioFim from './components/FormularioFim'

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Formulario1 />
        break;
      case 2:
        return <Formulario2 />
      case 3:
        return <Formulario3 />
      case 4:
        return <FormularioFim />
      default:
        return <Formulario1 />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
  }

  render() {
    return (
      <div className="App-header">
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 ? <button onClick={this.irParaProximaEtapa}>Proxima etapa</button> : ""}
      </div>
    );
  }
}

export default App;
