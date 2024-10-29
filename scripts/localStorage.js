

const getPedidosLocalStorage = () =>{
    const pedidos = JSON.parse(localStorage.getItem("arrayPedidos")) || [] ;
    return pedidos;
}


const buscaPedido = (id) =>{
    const pedidos = getPedidosLocalStorage()
    var pedidoApi = {}
    pedidos.forEach(pedido => {
        if(pedido.id == id){
            pedidoApi = pedido
        }
    })
    return pedidoApi 
}


const savePedidosLocalStorage = (pedido) =>{
    const pedidos = getPedidosLocalStorage()
    pedidos.push(pedido)
    localStorage.setItem("arrayPedidos", JSON.stringify(pedidos))
}


const loadPedidos  = () =>{
    const pedidos  = getPedidosLocalStorage()
    pedidos.forEach((pedido) => {
        exibirPedido(pedido, save=0)
    })
}


const excluiPedidoLocalStorage = (id) =>{
    var qtdPedidos      = 0 
    const pedidos       = getPedidosLocalStorage()
    const filtroPedidos = pedidos.filter((pedido) => pedido.id != id )
    filtroPedidos.forEach(pedido => {
        qtdPedidos ++
    })
    if(qtdPedidos == 0){
        localStorage.setItem("arrayPedidos",  JSON.stringify([]))
    }
    if(qtdPedidos > 0){
        localStorage.setItem("arrayPedidos",  JSON.stringify(filtroPedidos))
    }
}


function setItemLocalStorageApi(lancamentos){
    var arrayLancamentos = []
    lancamentos.forEach(lancamento => {
        lancamento = JSON.parse(lancamento.detalhes)
        arrayLancamentos.push(lancamento)
    })
    localStorage.setItem("arrayPedidosApi", JSON.stringify(arrayLancamentos))
}


loadPedidos()




















