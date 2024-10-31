

const editarPedido = (id) =>{
    var pedido = buscaPedido(id)
    var objCopos  = pedido.itens
    modal.classList.add('active')
    itens = objCopos
    exibirCardItemCarrinho()
    statusModalPedido("editando", id)
    statusBtn("editandoPedido")
    localCopoInEdit(id)
    statusPedidoEdit(id)
}


const localCopoInEdit = (id) => {
    var pedido = buscaPedido(id)
    var localCheck = pedido.localConsumo
    if( localCheck == "entregar"){
        document.querySelector(`#entregar`).checked = true
        document.querySelector(`#estabelecimento`).checked = false
        labelInputValue_Frete(pedido.valorFrete)
    }
    if( localCheck == "Consumir no local"){
        document.querySelector(`#entregar`).checked = false
        document.querySelector(`#estabelecimento`).checked = true 
    }
}


function statusPedidoEdit(id){
    var pedido = buscaPedido(id)
    console.log(pedido)
    var statusPedido = pedido.status
    console.log(statusPedido)
    var statusPedidoModal = document.querySelector(".statusPedidoInEdit")
    if (document.querySelector('.divPagamento').textContent == ''){
        statusPedidoModal.innerHTML = statusPedido
    }
    return statusPedido;
}


function addCopoInEdit(){
    const copo = {
        id              : f_geraId(),
        tipo            : 'copo',
        tipoItem        : f_tipo(),
        valorPorItem    : f_valorCopo(),
        quantidade      : f_qtdCopos(),
        tamanhoCopo     : f_tamanhoCopo(),
        localConsumo    : f_localConsumo(),
        listaAdcs       : contadorAcai().listaAdcs
    }
    resetCopo()
    itens.push(copo)
    exibirCardItemCarrinho()
}


function atualizarPedido(){
    var qtdItens    = 0
    var valor       = 0
    let pedido      = '' 
    let time        = {}
    let pedidos     = getPedidosLocalStorage()
    var idPedidoEdit= parseInt(document.querySelector(".idPedidoInEdit").textContent)
    var statusPedidoInEdit = document.querySelector(".statusPedidoInEdit").textContent
    pedidos.forEach((pedido) => { 
        if(pedido.id == idPedidoEdit){
            time = pedido.data
        }
    })
    itens.forEach(item => {
        valor += item.valorPorItem
        qtdItens    += parseInt(item.quantidade)
    })
    excluiPedidoLocalStorage(idPedidoEdit)
    if(qtdItens == 0){
        location.reload();
        return
    }
    pedido = {
        pagamento           : [],
        localConsumo        : f_localConsumo().local,
        tipoPagamento       : 'entrada',
        tipoTransferencia   : 'automatica',
        data                : time,
        itens               : itens,
        qtdItens            : qtdItens,
        id                  : idPedidoEdit,
        status              : statusPedidoInEdit,
        valor               : funcaoIinfoCarrinho(),
        valorFrete          : f_localConsumo().valor,
    }
    console.log(pedido)
    exibirPedido(pedido, save=1);
    location.reload();
}





