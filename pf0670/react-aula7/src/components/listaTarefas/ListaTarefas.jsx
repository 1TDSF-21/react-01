import React from 'react'
import Tarefas from '../tarefas/Tarefas'
import styled from 'styled-components';
import { useState } from 'react';

export const DivLista = styled.div`
  width:100%;
  min-height:85vh;
  padding:20px;
  background-color:#ccc;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;



const ListaTarefas = () => {

    //Lista de Tarefas
    const [tarefa, setTarefa] = useState(
        [
            {
                titulo: 'Relatório de Vendas',
                setor: 'Dep. Vendas',
                descricao: 'Vendemos tudo.'
            },
            {
                titulo: 'Estoque no final.',
                setor: 'ESTOQUE',
                descricao: 'Por gentileza reforçar o estoque para o NATAL.'
            }
        ])

    const addTarefa = () => {
        const novaTarefa = {
            titulo: 'CONTRATAÇÃO.',
            setor: 'PESSOAL',
            descricao: 'Providenciar treinamento'
        }

        setTarefa([...tarefa, novaTarefa])
    }


    return (
        <DivLista>
            {tarefa.map(
                (tar, i) => (


                    <Tarefas key={i}
                        titulo={tar.titulo}
                        setor={tar.setor}
                        descricao={tar.descricao}
                    />
                ))}
            <button onClick={addTarefa}>ADICIONAR POST-IT</button>
        </DivLista>
    )
}
export default ListaTarefas
