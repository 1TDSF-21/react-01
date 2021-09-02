import React, { useState } from 'react'
import Demo from '../demo/Demo'
import Features from '../features/Features'
import Home from '../home/Home'
import Pricing from '../pricing/Pricing'
import Resource from '../resource/Resource'

export default function Header() {

    const [componente, setComponente] = useState(<Home />)

    return (
        <>
            <header>
                <nav>
                    <a href="#" onClick={() => setComponente(<Home />)}>Home</a> |
                    <a href="#" onClick={() => setComponente(<Features />)}>Features</a> |
                    <a href="#" onClick={() => setComponente(<Pricing />)}>Pricing</a> |
                    <a href="#" onClick={() => setComponente(<Demo />)}>Demo</a> |
                    <a href="#" onClick={() => setComponente(<Resource />)}>Resource</a> |
                </nav>
            </header>

            <div>
                {componente}
            </div>
        </>
    )
}
