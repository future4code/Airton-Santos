import React from "react";

class Formulario1 extends React.Component {
    render() {
        return (
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                    <ol>
                        <li>Qual seu nome?</li>
                        <input type="text"></input>
                        <li>Qual sua idade?</li>
                        <input type="number"></input>
                        <li>Qual seu email?</li>
                        <input type="email" required></input>
                        <li>Qual sua escolaridade?</li>
                        <select>
                            <option>Ensino medio imcompleto</option>
                            <option>Ensino medio completo</option>
                            <option>Ensino superior imcompleto</option>
                            <option>Ensino superior completo</option>
                        </select>
                    </ol>
                </div>
        );
    }
}

export default Formulario1;