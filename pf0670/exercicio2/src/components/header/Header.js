import React,{useState} from 'react'
import './Header.css'

export default function Header() {
    let paragraf={
        backgroundColor:"yellow"
    }
    const [estilo, setEstilo] = useState(paragraf)
    
    const alterEstilo = ()=>{
       paragraf={
            backgroundColor:'red',
            color:'#000'
    }
        setEstilo(paragraf)
    }


   return(
      <header>
          <p style={estilo}>Este exercício demonstra a aplicação do CSS em cascata mesmo através dos componentes Filhos.</p>
          <button onClick={()=> alterEstilo()}>ALTERA-ESTILOS</button>
      </header>

)}