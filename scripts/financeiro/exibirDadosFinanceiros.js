

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
    Total de entradas do dia ${dia}: <strong> ${totalDia} </strong>R$ 
    <br>
    Total de entradas de ${mes}: <strong> ${totalMes} </strong>R$ 
    <br>
    Total de entradas do ano de ${ano}: <strong> ${totalAno} </strong>R$ 
    <br>
    <br>
    <b> Saidas:  </b>
    <br>
    Total de saidas do dia ${dia}: <strong> ${totais().saidasDia} </strong>R$ 
    <br>
    Total de saidas de ${mes}: <strong> ${totais().saidasMes} </strong>R$ 
    <br>
    Total de saidas do ano de ${ano}: <strong> ${totais().saidasAno} </strong>R$ 
    <br>
    <br>
    <b> Saldos:  </b>
    <br>
    Saldo do dia ${dia}: <strong> ${totais().saldoDia} </strong>R$ 
    <br>
    Saldo de ${mes}: <strong> ${totais().saldoMes} </strong>R$ 
    <br>
    Saldo do ano de ${ano}: <strong> ${totais().saldoMes} </strong>R$
    `
}







