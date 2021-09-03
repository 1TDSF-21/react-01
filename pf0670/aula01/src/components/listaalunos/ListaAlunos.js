import React from 'react'

export default function ListaAlunos(props) {

   return(
       <>
       <h2>Lista de Alunos do curso <span>{props.curso}</span></h2>
      <ul>
          <li>{props.alunos[0]}</li>
          <li>{props.alunos[1]}</li>
          <li>{props.alunos[2]}</li>
          <li>{props.alunos[3]}</li>
          <li>{props.maisAlunos()}</li>
      </ul>
      </>
)}