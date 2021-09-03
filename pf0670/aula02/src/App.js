import React from 'react'
import './App.css'
import CompTeste from './components/comp-teste/CompTeste'

export default ()=> {

    let paragraf={
        textAlign:'justify',
        color:'#00ff00',
        textIndent:'50px',
        fontSize:'2em'
    }

   return(
      <>
        <h1 style={{fontSize:'3em', color:'#ff0000'}}>Conteúdo do index.js, agora no App Component...</h1>
        <p style={paragraf}>Formas de adicionar CSS em um elemento no REACT de forma inline.</p>
        <p className="exemplo">Aqui é um exemplo de declaração de classe CSS sendo declarada dentro do componente REACT!!</p>
        <CompTeste/>
      </>
)}