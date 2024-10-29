

const f_localConsumo = () =>{
    var valorFrete      = 0
    let localConsumo    = ''
    let entregar        = document.querySelector('#entregar')
    let estabelecimento = document.querySelector('#estabelecimento')
    if (estabelecimento.checked) {
        localConsumo = 'Consumir no local'
    }
    if (entregar.checked) {
        localConsumo = 'entregar'
        valorFrete   = document.querySelector('#qtdentregar').value
    }
    objExport = {
        local  : localConsumo,
        valor  : valorFrete
    }
    return objExport;
}


function addNovoLancamentoAutomatico(){
    var valor = 0
    var qtdItens = 0
    itens.forEach(item => {
        qtdItens    ++
        valor += item.valorPorItem
    })
    const pedido = {
        status              : "fila",
        itens               : itens,
        data                : data_Time(),
        id                  : data_Time().fullData,
        qtdItens            : qtdItens,
        localConsumo        : f_localConsumo().local,
        valorFrete          : f_localConsumo().valor,
        valor               : funcaoIinfoCarrinho()+"R$",
        pagamento           : [],
        tipoPagamento       : 'entrada',
        tipoTransferencia   : 'automatica'
    }
    exibirPedido(pedido)
    savePedidosLocalStorage(pedido)
    modal.classList.remove('active')
    itens  = []
}

















