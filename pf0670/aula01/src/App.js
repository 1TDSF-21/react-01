import './App.css';
import Cabecalho from './components/cabecalho/Cabecalho';
import ListaAlunos from './components/listaalunos/ListaAlunos';

//Pegue todos os elementos de APP e transforme em Componentes

export default function App() {


  //Criando a declaração de envio dos parâmetros para a Lista de Alunos via props
  const lista = ['Leandro','Pedro','Breno','João']

  //Criando a declaração de enmvio do curso para o componente ListaAlunos
  const crs = 'ADS'

  //Criando uma função para ser passada como parâmetro para o componente ListaAlunos
  const addAluno = ()=> 'Isabela'

  return (
    <div className="App">
      <Cabecalho />
      <div className="AppCorpo">
        <ListaAlunos alunos={lista} curso={crs} maisAlunos={addAluno}/>
      </div>
    </div>
  )
}

