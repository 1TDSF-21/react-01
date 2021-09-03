

//Função Padrão
// function soma(a,b){
//     return a+b
// }

// const subtracao = (c,d) => c-d

// //Chamando a função padrão
// console.log("Resultado da Adição : " + soma(20,30))

// //Chamando a arrow-function
// console.log("Resultado da Subtração : " + subtracao(20,5))

const soma = (a,b) =>{
    console.log(a+b)
    return a+b
}

//Recuperando o botão que foi declarado no HTML com o ID de meuBotao
//Utilizando o GetElementById
//const botao = document.getElementById('meuBotao')
//Utilizando o QuerySelector
const botao = document.querySelector('#meuBotao')

//Atrelando ao elemento estilo css
botao.style.backgroundColor = '#fff';

//Atrelando um evento ao Elemento selecionado
//Utilizando com função anônima
// botao.addEventListener('click', function(){
//     soma(10,10)
// })

//Atrelando um evento ao Elemento selecionado
//Utilizando com arrow-function
botao.addEventListener('click', ()=>{
    soma(10,10)
})
