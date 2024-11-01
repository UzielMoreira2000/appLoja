

function f_dadosHistorico(){
    totalDia = totais().dia
    dia      = data_Time().dia
    mes      = mesExtenso(parseInt(data_Time().mes))
    ano      = data_Time().ano
    totalMes = totais().outubro
    totalAno = totais().ano
    dadosHistorico.innerHTML = `
    <b> Entradas: </b>
    <br>
    Total de entradas do dia ${dia}: <strong> ${totais().entradas.dia} </strong>R$ 
    <br>
    Total de entradas de ${mes}: <strong> ${totais().entradas.mes} </strong>R$ 
    <br>
    Total de entradas do ano de ${ano}: <strong> ${totais().entradas.ano} </strong>R$ 
    <br>
    <br>
    <b> Saidas:  </b>
    <br>
    Total de saidas do dia ${dia}: <strong> ${totais().saidas.dia} </strong>R$ 
    <br>
    Total de saidas de ${mes}: <strong> ${totais().saidas.mes} </strong>R$ 
    <br>
    Total de saidas do ano de ${ano}: <strong> ${totais().saidas.ano} </strong>R$ 
    <br>
    <br>
    <b> Saldos:  </b>
    <br>
    Saldo do dia ${dia}: <strong> ${totais().saldos.dia} </strong>R$ 
    <br>
    Saldo de ${mes}: <strong> ${totais().saldos.mes} </strong>R$ 
    <br>
    Saldo do ano de ${ano}: <strong> ${totais().saldos.ano} </strong>R$
    <br><br>
    <b>Fechamento de caixa</b>
    <br> ${calcCaixa()}
    `
}







