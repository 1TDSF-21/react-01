import React, { useState } from 'react'

export default function Contato() {

    const [carro, setCarro] = useState({ 'marca': '', 'modelo': '' })

    const mostrarCarro = (e) => {

        //Realizando o destruction
        const { name, value } = e.target

        //Tenho duas propriedades do evento desestruturado que posso
        //utilizar.
        if (name == 'marca') {
            setCarro({ 'marca': value, 'modelo': carro.modelo })
        } else if (name == 'modelo') {
            setCarro({ 'marca': carro.marca, 'modelo': value })
        }


    }


    return (
        <div>
            <h2>Dados do Carro</h2>
            Marca  : <input name="marca" type="text" onChange={mostrarCarro} /><br />
            Modelo : <input name="modelo" type="text" onChange={mostrarCarro} /><br />
            <p>Minha marca de carro é <span><b>{carro.marca}</b></span> e o modelo dele é <span><b>{carro.modelo}</b></span>.</p>
        </div>

    )
}
