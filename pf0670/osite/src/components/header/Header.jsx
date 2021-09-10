import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contato from '../contato/Contato'
import Fotos from '../fotos/Fotos'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'


export default function Header() {
    return (

        <div>
            <h1>O SITE</h1>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/sobre'>Sobre</Link> </li>
                        <li><Link to='/servicos'>Serviços</Link></li>
                        <li><Link to='/fotos'>Fotos</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route path='/sobre' component={Sobre} />
                    <Route path='/servicos' component={Servicos} />
                    <Route path='/fotos' component={Fotos} />
                    <Route path='/contato' component={Contato} />
                </Switch>
            </main>
        </div>

    )
}

