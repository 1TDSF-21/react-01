import React, { useState } from 'react'
import reactDom from 'react-dom';

export default function Semaforo(props){
    const [semaforo, setSemaforo] = useState("Siga");
    const [cor, setCor] = useState("green");

    const mudaSemaforo = () =>{
        if (semaforo == "Siga"){
            setSemaforo("Atenção");
            setCor("yellow")
        } else if (semaforo == "Atenção"){
            setSemaforo("Pare");
            setCor("red")
        } else if (semaforo == "Pare"){
            setSemaforo("Siga");
            setCor("green")
        }
    }
    
    return(
        
        <div className="body">
            <h2 style={{color:cor}}>{semaforo}</h2>
            <button onClick={() => mudaSemaforo()}> Change </button>
            {props.children}
        </div>      
    )

    
}
