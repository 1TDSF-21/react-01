import React, {useState} from 'react'

export default function Operacoes() {

    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5
    
    const aumentar = ()=>{
        setValorState(valorState + 5)
        valorVariavel+=5
    }
    
   return(
      <>
        <p>valorState : {valorState}</p>
        <p>valorVariavel : {valorVariavel}</p>
        <button onClick={()=> aumentar()}>Aumentar</button>
      </>
)}