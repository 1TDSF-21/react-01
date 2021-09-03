import React from 'react'

export default function Parceiros(props) {

  let nr1 = 10
  let nr2 = 5

   return(
       <>
        <h2>Conheça nossos Parceiros</h2>

        <span>{props.calculo(nr1,nr2)}</span>

        <p><a href="#">Ford</a></p>
        <p><a href="#">GM</a></p>
        <p><a href="#">FIAT/Crysler</a></p>
        <p><a href="#">NISSAN</a></p>
        <p><a href="#">TOYOTA</a></p>
      </>
)}