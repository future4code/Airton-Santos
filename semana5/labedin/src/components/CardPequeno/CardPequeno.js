import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
        <img src={ props.icone } />
            <div>
                <p><strong>{props.tipo}</strong>{ props.informacao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;