

const dadosHistorico = document.querySelector('.dadosHistorico')

function totais() {
    var saldoMes  = 0
    var saidasAno = 0
    var saidasDia = 0
    var saidasMes = 0
    var dia       = 0  
    var total     = 0
    var janeiro   = 0 
    var fevereiro = 0 
    var marco     = 0 
    var abril     = 0 
    var maio      = 0 
    var junho     = 0 
    var julho     = 0 
    var agosto    = 0 
    var setembro  = 0 
    var outubro   = 0 
    var novembro  = 0 
    var dezembro  = 0 
    var entradasMes = 0
    const lancamentos = 
    JSON.parse(localStorage.getItem("arrayPedidosApi")) || [] ;
    lancamentos.forEach((lancamento) => {
        var mes   = lancamento.data.mes
        var valor = parseInt(lancamento.valor)
        if(lancamento.tipoPagamento == 'entrada'){
            if(lancamento.data.mes == data_Time().mes){
                entradasMes += valor
            }
            if(lancamento.data.dia == data_Time().dia){
                dia += valor
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
        }
        if(lancamento.tipoPagamento == 'saida'){
            if(lancamento.data.dia == data_Time().dia){
                saidasDia += valor
            }
            if(lancamento.data.mes == data_Time().mes){
                saidasMes += valor
            }
            if(lancamento.data.ano == data_Time().ano){
                saidasAno += valor
            }
        }
    })
    total = janeiro + fevereiro + marco +
    abril + maio + junho + julho + agosto +
    setembro + outubro + novembro + dezembro 

    saldoDia = dia - saidasDia
    saldoMes = entradasMes - saidasMes

    const totais = {
        saldoMes    : saldoMes,
        entradasMes : entradasMes,
        saldoDia    : saldoDia,
        saidasDia   : saidasDia,
        saidasMes   : saidasMes,
        saidasAno   : saidasAno,
        dia         : dia,
        ano         : total,
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
    return totais
}


function exibirTotais () {
    var result
    const lancamentos = JSON.parse(localStorage.getItem("arrayPedidosApi")) || [] ;
    lancamentos.forEach(lancamento => {
        result = totais(lancamento)
    })
    f_dadosHistorico()
}



































