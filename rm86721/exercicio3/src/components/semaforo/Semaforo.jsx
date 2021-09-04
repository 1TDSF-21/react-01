import React from "react"

import { useState } from "react"

export default function Semaforo(props){

    const lista = ['Pare', 'Atenção', 'Siga']

    const [sinal,setSinal] = useState(0);

    const [cor, setCor] = useState("red")

    const fontColor = {
        color:cor,
    }

    function Conta(){
        if(sinal === 0){
            setSinal(1)
            setCor("yellow")
        }else if(sinal === 1){
            setSinal(2)
            setCor("green")
        }else if(sinal === 2) {
            setSinal(0)
            setCor("red")
        }
    }
    return(
        <div>
            <h2 style={fontColor}> {lista[sinal]} </h2>
            <button onClick={() => Conta()}>Alterar</button>
        </div>
    )
}