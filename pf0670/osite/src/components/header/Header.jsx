import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contato from '../contato/Contato'
import Fotos from '../fotos/Fotos'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'
import { Botao, Navbar, SpanBtFont } from '../../styled'


export default function Header() {

    const [fonte, setfonte] = useState(1)

    const alteraMenu = (parametro) => {
        if (parametro) {
            setfonte(fonte + 0.5)
        } else {
            setfonte(fonte - 0.5)
        }
    }

    return (

        <div>
            <h1>O SITE</h1>
            <header>
                <SpanBtFont onClick={() => alteraMenu(true)}>+</SpanBtFont>
                <SpanBtFont onClick={() => alteraMenu(false)}>-</SpanBtFont>
                <Navbar fontSize={fonte}>

                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/sobre'>Sobre</Link> </li>
                        <li><Link to='/servicos'>Serviços</Link></li>
                        <li><Link to='/fotos'>Fotos</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                    </ul>
                </Navbar>



                <h1>Professor</h1>
                <p>Ministro aulas nas áreas de, Engenharia de Software, Desenvolvimento Web com diversas linguagens atuais. Iniciei minha carreira como continuo em empresas de informática o que me deixou mais próximo da área de TI, tornando mais fácil o meu desenvolvimento como programador ao longo dos anos. Sempre tive ótimo instrutores e amigos que me ajudavam na caminhada do conhecimento, então isso com certeza deve ter me influenciado na minha carreira hoje.</p>
                <Botao>
                    <Link to='/servicos'>
                        Ver mais
                    </Link>
                </Botao>
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

