import React from "react";

class Formulario2 extends React.Component {
    render() {
        return (
                <div>
                    <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                    <ol>
                        <li>Qual curso?</li>
                        <input type="text"></input>
                        <li>Qual a unidade de ensino?</li>
                        <input type="text"></input>
                    </ol>
                </div>
        );
    }
}

export default Formulario2;