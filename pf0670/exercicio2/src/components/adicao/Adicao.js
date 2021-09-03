import React from 'react'

export default function Adicao(props) {
    return (
        <div>

<button onClick={()=> props.operacao()}>Aumentar-No-Filho</button>
            <p>o Resultado da operação é : {props.resultado}</p>
            
        </div>
    )
}
