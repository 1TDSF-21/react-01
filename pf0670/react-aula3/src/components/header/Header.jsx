import React from 'react'
import Itens from '../itens/Itens'

export default function Header() {
    return (
        <header>
            <Itens>
                <a href="#">About</a>|
                <a href="#">FIX</a> |
                <a href="#">Login</a> |
            </Itens>
        </header>
    )
}
