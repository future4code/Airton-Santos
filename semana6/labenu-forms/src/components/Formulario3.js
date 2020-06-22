import React from "react";

class Formulario3 extends React.Component {
    render() {
        return (
                <div>
                    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                    <ol>
                        <li>Por que você não terminou um curso de graduação?</li>
                        <input type="text"></input>
                        <li>Você fez algum curso complementar?</li>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso tecnico</option>
                            <option>Curso de ingles</option>
                        </select>
                    </ol>
                </div>
        );
    }
}

export default Formulario3;