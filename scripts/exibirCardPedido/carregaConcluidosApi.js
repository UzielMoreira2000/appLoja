

function carregaConcluidosApi(){
    apiGet()
    setTimeout(function aguardaPedidosApi(){
        const lancamentos = JSON.parse(localStorage.getItem("arrayPedidosApi"))||[]
        const pedidos = lancamentos.filter((lancamento) => 
            lancamento.tipoTransferencia != 'manual')
        pedidos.forEach((pedido) => {
            if(pedido.data.dia == data_Time().dia){
                exibirPedido(pedido, save=0)
            }
        })
    },2000)
}














































