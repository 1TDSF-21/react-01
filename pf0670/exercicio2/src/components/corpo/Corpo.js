import React, {useState} from 'react'
import CaixaTeste from '../caixa/CaixaTeste'
import imagem from '../img/logo192.png'
import Operacoes from '../operacoes/Operacoes'
import CompTeste from '../teste/CompTeste'
import './Corpo.css'

export default function Corpo() {

  const [corpoState, setCorpoState] = useState('Conteúdo compartilhado no corpo!')

  const [paragrafo, setParagrafo] = useState('Valor do Paragrafo!')

   return(
       <section>
        <h2>Estilizando uma imagem através dos componentes.</h2>
        <img src={imagem} alt="Logo React" />
        <p>Porque com React é :</p>
          <div>
            <CompTeste/>
            <Operacoes />
            <CaixaTeste attribState={setParagrafo} valorState={paragrafo}/>

          </div>
        <p>EASY!</p>
        <p>FAST!</p>
        <p>BEST!</p>
        <p>E possui STATE : {corpoState}</p>

          <div>
            <p>{paragrafo}</p>
          </div>

        <button onClick={()=> setCorpoState('STATE-ALTERADO NO CORPO!')}>ALTERA-STATE</button>
        <button onClick={()=> setParagrafo('NOVO VALOR DE PARAGRAFO')}>EXECUTANDO-USE STATE</button>
      </section>
)}