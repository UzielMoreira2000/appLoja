

const dadosHistorico = document.querySelector('.dadosHistorico')

function totais() {
    const lancamentos  = getLancamentosApiLocalStorage()
    const arrayEntrada = calcEntradas(lancamentos)
    const arraySaida   = calcSaidas(lancamentos)
    const arraySaldo   = calcSaldo(arrayEntrada, arraySaida)
    const totais = {
        entradas: arrayEntrada,
        saidas  : arraySaida,
        saldos  : arraySaldo, 
    }
    return totais
}


function calcCaixa(){
    const lancamentos = getLancamentosApiLocalStorage()
    var valueDiaAnterior = 0
    var valueDiaCorrente = 0
    lancamentos.forEach(lancamento => {
        var valor = lancamento.valor
        if(lancamento.tipoPagamento == 'entrada'){
            if(lancamento.data.dia  == data_Time().dia){
                valueDiaCorrente += valor
                console.log(lancamento.data.dia)
            }
            if( lancamento.data.dia == lancamento.data.dia - 1){
                console.log(lancamento.data.dia)
                valueDiaAnterior += valor
            }
        }
    })
    const caixa = 
        (valueDiaCorrente + valueDiaAnterior) - (totais().saidas.diaDinheiro)
    console.log('fechamento do caixa no dia:' + caixa)
    return caixa
}
calcCaixa()


function calcEntradas(lancamentos){
    var total       = 0
    var diaCorrente = 0  
    var mesCorrente = 0
    var anoCorrente = 0    
    var janeiro     = 0
    var fevereiro   = 0
    var marco       = 0
    var abril       = 0
    var maio        = 0
    var junho       = 0
    var julho       = 0
    var agosto      = 0
    var setembro    = 0
    var outubro     = 0
    var novembro    = 0
    var dezembro    = 0
    lancamentos.forEach(lancamento => {
        var valor = lancamento.valor
        var mes   = lancamento.data.mes
        if(lancamento.tipoPagamento == 'entrada'){
            if(lancamento.data.dia == data_Time().dia){
                diaCorrente += valor
            }if(lancamento.data.mes == data_Time().mes){
                mesCorrente += valor
            }if(lancamento.data.ano == data_Time().ano){
                anoCorrente += valor
            }if(mes == 1){
                janeiro += valor
            }if(mes == 2){
                fevereiro += valor
            }if(mes == 3){
                marco += valor
            }if(mes == 4){
                abril += valor
            }if(mes == 5){
                maio += valor
            }if(mes == 6){
                junho += valor
            }if(mes == 7){
                julho += valor
            }if(mes == 8){
                agosto += valor
            }if(mes == 9){
                setembro += valor
            }if(mes == 10){
                outubro += valor
            }if(mes == 11){
                novembro += valor
            }if(mes == 12){
                dezembro += valor
            }
            total += valor
        }
    })
    const entradas = {
        total       : total,
        dia         : diaCorrente,
        mes         : mesCorrente,
        ano         : anoCorrente,
        janeiro     : janeiro,   
        fevereiro   : fevereiro, 
        marco       : marco,     
        abril       : abril,     
        maio        : maio,       
        junho       : junho,     
        julho       : julho,     
        agosto      : agosto,     
        setembro    : setembro,  
        outubro     : outubro,   
        novembro    : novembro, 
        dezembro    : dezembro,
    }
    return entradas;
}


function calcSaidas(lancamentos){
    var diaDinheiro = 0
    var total       = 0
    var diaCorrente = 0  
    var mesCorrente = 0
    var anoCorrente = 0    
    var janeiro     = 0
    var fevereiro   = 0
    var marco       = 0
    var abril       = 0
    var maio        = 0
    var junho       = 0
    var julho       = 0
    var agosto      = 0
    var setembro    = 0
    var outubro     = 0
    var novembro    = 0
    var dezembro    = 0
    lancamentos.forEach(lancamento => {
        var valor = lancamento.valor
        var mes   = lancamento.data.mes
        if(lancamento.tipoPagamento == 'saida'){
            if(lancamento.data.dia == data_Time().dia){
                diaCorrente += valor
                lancamento.pagamento.forEach(pagamento => {
                    if(lancamento.forma == 'dinheiro'){
                        console.log(pagamento.forma)
                        diaDinheiro += valor
                    }
                })
            }if(lancamento.data.mes == data_Time().mes){
                mesCorrente += valor
            }if(lancamento.data.ano == data_Time().ano){
                anoCorrente += valor
            }if(mes == 1){
                janeiro += valor
            }if(mes == 2){
                fevereiro += valor
            }if(mes == 3){
                marco += valor
            }if(mes == 4){
                abril += valor
            }if(mes == 5){
                maio += valor
            }if(mes == 6){
                junho += valor
            }if(mes == 7){
                julho += valor
            }if(mes == 8){
                agosto += valor
            }if(mes == 9){
                setembro += valor
            }if(mes == 10){
                outubro += valor
            }if(mes == 11){
                novembro += valor
            }if(mes == 12){
                dezembro += valor
            }
            total += valor
        }
    })
    const saidas = {
        diaDinheiro : diaDinheiro,
        total       : total,
        dia         : diaCorrente,
        mes         : mesCorrente,
        ano         : anoCorrente,
        janeiro     : janeiro,   
        fevereiro   : fevereiro, 
        marco       : marco,     
        abril       : abril,     
        maio        : maio,       
        junho       : junho,     
        julho       : julho,     
        agosto      : agosto,     
        setembro    : setembro,  
        outubro     : outubro,   
        novembro    : novembro, 
        dezembro    : dezembro,
    }
    return saidas;
}


function calcSaldo(arrayEntrada, arraySaida){
    var total       = 0
    var diaCorrente = 0  
    var mesCorrente = 0
    var anoCorrente = 0    
    var janeiro     = 0
    var fevereiro   = 0
    var marco       = 0
    var abril       = 0
    var maio        = 0
    var junho       = 0
    var julho       = 0
    var agosto      = 0
    var setembro    = 0
    var outubro     = 0
    var novembro    = 0
    var dezembro    = 0
    total       = arrayEntrada.total - arraySaida.total
    diaCorrente = arrayEntrada.dia - arraySaida.dia
    mesCorrente = arrayEntrada.mes - arraySaida.mes
    anoCorrente = arrayEntrada.ano - arraySaida.ano    
    janeiro     = arrayEntrada.janeiro - arraySaida.janeiro
    fevereiro   = arrayEntrada.fevereiro - arraySaida.fevereiro
    marco       = arrayEntrada.marco - arraySaida.marco
    abril       = arrayEntrada.abril - arraySaida.abril
    maio        = arrayEntrada.maio - arraySaida.maio
    junho       = arrayEntrada.junho - arraySaida.junho
    julho       = arrayEntrada.julho - arraySaida.julho
    agosto      = arrayEntrada.agosto - arraySaida.agosto
    setembro    = arrayEntrada.setembro - arraySaida.setembro
    outubro     = arrayEntrada.outubro - arraySaida.outubro
    novembro    = arrayEntrada.novembro - arraySaida.novembro
    dezembro    = arrayEntrada.dezembro - arraySaida.dezembro
    const saldos = {
        total       : total,
        dia         : diaCorrente,
        mes         : mesCorrente,
        ano         : anoCorrente,
        janeiro     : janeiro,   
        fevereiro   : fevereiro, 
        marco       : marco,     
        abril       : abril,     
        maio        : maio,       
        junho       : junho,     
        julho       : julho,     
        agosto      : agosto,     
        setembro    : setembro,  
        outubro     : outubro,   
        novembro    : novembro, 
        dezembro    : dezembro,
    }
    return saldos;
}

 



































function exibirTotais () {
    var result
    const lancamentos = getLancamentosApiLocalStorage()
    lancamentos.forEach(lancamento => {
        result = totais(lancamento)
    })
    // console.log(lancamentos)
    f_dadosHistorico()
}



































