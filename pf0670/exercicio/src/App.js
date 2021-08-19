import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import Parceiros from './components/parceiros/Parceiros'

//COMPONENTE-PAI

export default function App() {

    const listaCarros = ['Veraneio','Verona','Miura','Gurgel','Elba']


    const multiplica = (nr1,nr2)=> 'Resultado : ' + (nr1*nr2)


   return(
        <div>
            <Cabecalho/>
            <Carros addCarro={listaCarros}/>
            <Parceiros calculo={multiplica}/>
        </div>
)}