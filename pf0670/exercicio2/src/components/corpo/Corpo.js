import React from 'react'
import imagem from '../img/logo192.png'
import './Corpo.css'

export default function Corpo() {


   return(
       <section>
        <h2>Estilizando uma imagem através dos componentes.</h2>
        <img src={imagem} alt="Logo React" />
        <p>Porque com React é :</p>
        <p>EASY!</p>
        <p>FAST!</p>
        <p>BEST!</p>
      </section>
)}