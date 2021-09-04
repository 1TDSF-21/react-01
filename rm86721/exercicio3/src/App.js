import "./App.css";
import { useState } from "react"

import Semaforo from "./components/semaforo/Semaforo";
import Carros from "./components/carros/Carros";
import Carteirinha from "./components/carteirinha/Carteirinha";

import Ben from "./img/ben.jpg";
import Ze from "./img/ze.png";
import Pedro from "./img/pedro.jpeg";
import Pimenta from "./img/pimenta.jpg";

function App() {
  let lista = ["golzinho ", "uno", "fit", "fox ", "corola"];

  const [nome,setNome] = useState("");
  const [rm,setRm] = useState("");
  const [curso,setCurso] = useState("");
  const [turma,setTurma] = useState("");

  const cadastrar = (e) => {
    const {name,value} = e.target;
    if(name == 'nome'){
      setNome(value)
    }else if(name == 'rm'){
      setRm(value)
    }else if(name == 'curso'){
      setCurso(value)
    }else if(name == 'turma'){
      setTurma(value)
    }
  }
 
  return (
    <div className="App">
      <h1>Leandro Cavallari rm86721 1TDSF</h1>
      <Semaforo />
      <Carros>{lista}</Carros>

      <div className="campos">
        <label>Digite o nome</label>
        <input type="text"  name="nome" onChange={cadastrar}/>
        <label>Digite o Rm</label>
        <input type="text"  name="rm" onChange={cadastrar}/>
        <label>Digite o Curso</label>
        <input type="text"  name="curso" onChange={cadastrar}/>
        <label>Digite a sala</label>
        <input type="text"  name="turma" onChange={cadastrar}/>
      </div>

      <div className="cards">
        <Carteirinha
          foto={Ben}
          alt="ben10"
          nome="Benjamin tenisson"
          rm="86721"
          curso="Analise e desenvolvimento de sistemas"
          turma="1TDSF"
        />
        <Carteirinha
          foto={Ze}
          alt="ben10"
          nome="Benjamin tenisson"
          rm="86721"
          curso="Analise e desenvolvimento de sistemas"
          turma="1TDSF"
        />
        <Carteirinha
          foto={Pedro}
          alt="ben10"
          nome="Benjamin tenisson"
          rm="86721"
          curso="Analise e desenvolvimento de sistemas"
          turma="1TDSF"
        />
        <Carteirinha
          foto={Pimenta}
          alt="pimentinha"
          nome={nome}
          rm={rm}
          curso={curso}
          turma={turma}
        />
      </div>
    </div>
  );
}

export default App;
