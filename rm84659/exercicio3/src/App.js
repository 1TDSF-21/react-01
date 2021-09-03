import React from 'react'
import Carteirinha from './components/carteirinha/Carteirinha'
import Semaforo from './components/semaforo/Semaforo'
import './App.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {

    const listaNomes = ['Caio Lizeo Soares', 'Jonatan Jacó Mascalhusk De Oliveira Souza', 'Isabela Bianca Correa de Macedo'];
    const listaRM = [87809, 88221, 88493];
    const listaCurso = ['Análise e Desenvolvimento de Sistemas', 'Atletismo', 'Fotografia Digital'];
    const listaTurma = ['Turma C','Turma J','Turma I'];

   return(
        <div className="container">
            <h1>MENTAL HEALTH</h1>
            <h1>Nome: Caio Lizeo Soares - 87809</h1>
            <h1>Nome: Isabela Bianca Correa de Macedo - 88493</h1>
            <h1>Nome: Jonatan Jacó Mascalhusk De Oliveira Souza - 88221</h1>
            <h1>Nome: Lucas Amorim Marques Pereira - 84659</h1>
            <h1>Nome: Rodrigo Gonzalo Barbosa Segura - 83954</h1>
            <br/>

            <Semaforo>
            <br/>
            <br/>
            <h2>Lista de Carros</h2>
            <ul>
                <li>Palio</li>
                <li>Uno</li>
                <li>Marea</li>
                <li>Fiorino</li>
                <li>Strada</li>
                <li>Escort</li>
                <li>Tipo</li>
                <li>Gol</li>
                <li>Fiat 147</li>
                <li>Siena</li>
            </ul>
            </Semaforo>
            <br/>
            <Carteirinha setNomes={listaNomes} setRM={listaRM} setCurso={listaCurso} setTurma={listaTurma}/>
        </div>

)}


