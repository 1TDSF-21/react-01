const defineSemaforo = ()=>{
    var valor = 1
    var semaforoAtual = ''
    if(valor == 1){
        semaforoAtual = 'atenção'
        valor++;
    } else if(valor == 2){
        semaforoAtual = 'pare' ;
        valor++;
    }else if(valor == 3){
        semaforoAtual = 'siga';
        valor = 1;
    }
    return semaforoAtual;
}