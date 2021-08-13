import React from 'react'

export default function Parceiros(props){
    return(
        <>
            <h2> PARCEIROS </h2>

            <button onClick={props.botao}>Clica aqui</button> <br/>
            <span>{props.resultado}</span>
            <li><a href="https://url.gratis/C9ppF" target="_blank">PARCEIRINHO</a></li>
            <li><a href="https://url.gratis/D3X15P" target="_blank">Parceirão</a></li>
            <li><a href="https://url.gratis/38vqoH" target="_blank">ÉÉÉÉÉÉÉÉ</a></li>
            <li><a href="https://url.gratis/xpmTTh" target="_blank">SURPRISE MA FRIE</a></li>


        </>
    )
}