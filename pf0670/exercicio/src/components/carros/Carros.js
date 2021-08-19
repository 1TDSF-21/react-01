import React from 'react'
import carroBase from '../img/carro-base.jpg'

//COMPONENTE-FILHO

export default function Carros(props) {

   return(
      <>
        <img src={carroBase} alt="Não é um carro é um monstro!"/>
        <ul>
            <li>{props.addCarro[0]}</li>
            <li>{props.addCarro[1]}</li>
            <li>{props.addCarro[2]}</li>
            <li>{props.addCarro[3]}</li>
            <li>{props.addCarro[4]}</li>
        </ul>
      </>
)}