import React, {useState} from 'react'
import imagem from '../img/logo192.png'
import Operacoes from '../operacoes/Operacoes'
import CompTeste from '../teste/CompTeste'
import './Corpo.css'

export default function Corpo() {

  const [corpoState, setCorpoState] = useState('Conteúdo compartilhado no corpo!')

   return(
       <section>
        <h2>Estilizando uma imagem através dos componentes.</h2>
        <img src={imagem} alt="Logo React" />
        <p>Porque com React é :</p>
          <div>
            <CompTeste/>
            <Operacoes/>
          </div>
        <p>EASY!</p>
        <p>FAST!</p>
        <p>BEST!</p>
        <p>E possui STATE : {corpoState}</p>
        <button onClick={()=> setCorpoState('STATE-ALTERADO NO CORPO!')}>ALTERA-STATE</button>
      </section>
)}