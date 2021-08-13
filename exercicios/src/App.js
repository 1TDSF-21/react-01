import { useState } from "react"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Carros from "./components/Carros/Carros"
import Parceiros from "./components/Parceiros/Parceiros"

function App() {

  const nome = ['Marquinhos','gurila','CYBERPUNK','é o BRAIA','SONICA']

  const [conta, setConta] = useState(0)

  function soma(){
    setConta(conta + 1)
  }

  return (
    <>
      <Cabecalho/>
      <Carros nome={nome} />
      <Parceiros botao={soma} resultado={conta}/>
    </>
  );
}

export default App;
