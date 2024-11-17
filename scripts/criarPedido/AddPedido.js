

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
        pagamento           : [],
        localConsumo        : f_localConsumo().local,
        tipoPagamento       : 'entrada',
        tipoTransferencia   : 'automatica',
        data                : data_Time(),
        itens               : itens,
        qtdItens            : qtdItens,
        id                  : data_Time().fullData,
        status              : "fila",
        valor               : funcaoIinfoCarrinho(),
        valorFrete          : f_localConsumo().valor,
        montador            : getObjAuth().user,
    }
    exibirPedido(pedido)
    savePedidosLocalStorage(pedido)
    modal.classList.remove('active')
    itens  = []
}

















