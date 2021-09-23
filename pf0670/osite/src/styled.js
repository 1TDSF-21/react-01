import styled from 'styled-components'

const alteraMenu = () => {
    const minutos = new Date().getMinutes()

    if(minutos >=52){
        return '#202020'
    }else if(minutos <= 51){
        return '#ff0000'
    }

}

const paletaObj = {
    temporario:alteraMenu,
    cinza:'#1c1c1c1c',
    azul:'#010192',
    branco:'#FFFFFFFF',
    preto:'#202020'
}


export const ElHtml = styled.html`
@import url('https://fonts.googleapis.com/css2?family=Asap:wght@600&family=Nunito:wght@600&display=swap');
    font-size: 16px;
`

export const BodyAll = styled.body`
    font-family: 'Nunito', sans-serif;
`

export const TitulosFont = styled.h1`
    font-family: 'Asap', sans-serif;
`
export const Botao = styled.div`
    a{
        display: inline-block;
        color: ${paletaObj.branco};
        text-decoration: none;
        padding: 1vh 3vw;
        background-color: ${paletaObj.azul};
        font-size: 0.9em;
        border-radius: 3px;
    }
`
export const Navbar = styled.nav`
  
    background-color: ${paletaObj.temporario};
    
    font-size:${props=> `${props.fontSize}rem`};

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style:none;
        flex-wrap:wrap;

        li{
            padding:2%;
            
            a{
                color: ${paletaObj.branco};
                text-decoration: none;
            }
        }
        li:hover{
            background-color: ${paletaObj.branco};
            a{
                color: ${paletaObj.preto};
            }
            
        }
    }
`
export const SpanBtFont = styled.span`
    background-color: ${paletaObj.branco};
    border:solid 2px ${paletaObj.preto};
    padding:0 1px;
    

`


