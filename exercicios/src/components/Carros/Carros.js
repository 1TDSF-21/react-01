import React from 'react'

import Carro1 from "../../img/carro1.jpg"
import Uno from "../../img/uno.jpg"
import Cyber from "../../img/cyberpunk.jpeg"
import Auto from "../../img/auto.jpg"
import Surprise from "../../img/surprise.jpg"


export default function Carros(props){

    return(
        <>
            <li><p>{props.nome[0]}</p><img src={Carro1} alt="carro"/></li>
            <li><p>{props.nome[1]}</p><img src={Uno} alt="carro"/></li>
            <li><p>{props.nome[2]}</p><img src={Cyber} alt="carro"/></li>
            <li><p>{props.nome[3]}</p><img src={Auto} alt="carro"/></li>
            <li><p>{props.nome[4]}</p><img src={Surprise} alt="carro"/></li>
        </>
    )
}