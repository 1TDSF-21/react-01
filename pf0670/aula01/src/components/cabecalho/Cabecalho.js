import React from 'react'
import Imagem from '../imagem/Imagem'
import Ligacao from '../ligacao/Ligacao'
import Dados from '../dados/Dados'

export default function Cabecalho(){
    return(
        <header className="App-header">
            <Imagem />
            <Ligacao />
            <Dados />
        </header>
    )
}