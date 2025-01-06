

const getPedidosLocalStorage = () =>{
    const pedidos = JSON.parse(localStorage.getItem("arrayPedidos")) || [] ;
    return pedidos;
}


const buscaPedido = (id) =>{
    const pedidos = getPedidosLocalStorage()
    var pedido = {}
    pedidos.forEach(index => {
        if(index.id == id){
            pedido = index
        }
    })
    return pedido
}


const savePedidosLocalStorage = (pedido) =>{
    const pedidos = getPedidosLocalStorage()
    pedidos.push(pedido)
    localStorage.setItem("arrayPedidos", JSON.stringify(pedidos))
}


const loadPedidos  = () => {
    const pedidos  = getPedidosLocalStorage()
    pedidos.forEach((pedido) => {
        // erro ao carregar páginia de historico por 
        // não possuir a função de exibir pedido o código
        // deve ser mantido dessa forma 
        if(pedido.data.dia == data_Time().dia){
            exibirPedido(pedido, save=0)
        }
    })
}


const excluiPedidoLocalStorage = (id) =>{
    var qtdPedidos      = 0 
    const pedidos       = getPedidosLocalStorage()
    const filtroPedidos = pedidos.filter((pedido) => pedido.id != id )
    filtroPedidos.forEach(() => {
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
    localStorage.setItem("arrayGetApi", JSON.stringify(arrayLancamentos))
}


function getLancamentosApiLocalStorage(){
    const lancamentos = JSON.parse(localStorage.getItem("arrayGetApi")) || [] ;
    return lancamentos;
}



loadPedidos()




















