import React from 'react'
import Header from './components/header/Header'
import {ElHtml, BodyAll,TitulosFont} from './styled'


export default function App() {
    return (
        <div id="container">
            <ElHtml>
            <BodyAll>
                <TitulosFont>ROTAS</TitulosFont>
                <Header/>
            </BodyAll>
            </ElHtml>
        </div>
    )
}
