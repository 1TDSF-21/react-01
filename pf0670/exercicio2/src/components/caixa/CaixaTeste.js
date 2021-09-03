import React from 'react'

export default function CaixaTeste(props) {
    return (
        <div>

            <p>Valor do State {props.valorState}</p>
            COMPONENTE CAIXA
            <button onClick={()=> props.attribState('VALOR EM CAIXA!!')}>EXECUTANDO STATE EM CAIXA</button>
        </div>
    )
}
