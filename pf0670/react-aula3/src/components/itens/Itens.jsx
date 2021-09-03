import React, { useState } from 'react'

export default function Itens(props) {

    const [frase, setFrase] = useState('')

    return (
        <>
            <a href="#">Home</a> |
            <a href="#">Features</a> |
            <a href="#">Pricing</a> |
            <a href="#">Demo</a> |
            <a href="#">Resource</a> |
            {props.children}
            <input type="text" value={frase} onChange={(e) => setFrase(
                e.target.value)} />
            <p>Frase motivadora do dia: <span>{frase}</span></p>
            <button onClick={() => setFrase('')}>Reset</button>
        </>
    )
}
