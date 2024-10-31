

function pagamento(id){
    var lancamento = buscaPedido(id)
    const divPagamento = document.querySelector('.divPagamento')
    modal.classList.add('active')
    document.querySelector('.montagemEdicao').innerHTML = ''
    divPagamento.innerHTML = `
    <div class="colAPagamento">
        <h3><br> 
        pagamento do pedido <b class="idPedidoPagamento">${id}</b>
        </h3>
        <p><strong> formas de pagamento </strong></p>
        <input id="pix" name="" type="checkbox" 
        onclick="labelInputValue_Pagamento('pix')">
        <label class="pix" for=""> Pix </label><br>
        <input id="debito" name="" type="checkbox" 
        onclick="labelInputValue_Pagamento('debito')">
        <label class="debito" for=""> Cartão de Débito </label><br>
        <input id="credito" name="" type="checkbox" 
        onclick="labelInputValue_Pagamento('credito')">
        <label class="credito" for=""> Cartão de Crédito </label><br>
        <input id="dinheiro" name="" type="checkbox" 
        onclick="labelInputValue_Pagamento('dinheiro')">
        <label class="dinheiro" for=""> Dinheiro </label><br>
        <div class="divPostForm"></div> 
    </div>`
    +
    `<div class="colBPagamento">
        <button id="" class="fecharPagamento"  onclick="fecharPagamento(${id})">
            <i class='fecharPagamento bx bx-x'></i> 
        </button> <h3>
        Total do pedido <b class="valor">${lancamento.valor}</b>
        </h3><br>
        <div class="calculadora"> Valor a ser pago: 
            <strong class="valor-a-Pagar"> ${parseFloat(new Number(lancamento.valor).toFixed(1))} </strong>
        </div><br><br><br><br>
        <button class="aceitarFormaPagamento invisivel" onclick="aceitarFormaPagamento()">
            Concluir pagamento
            <i class='bx bx-chevron-right aceitarFormaPagamento'></i>   
        </button> 
    </div> `
}


const fecharPagamento = (id) =>{ 
    var pedido = buscaPedido(id)
    pedido.status = 'entregando'
    excluiPedidoLocalStorage(pedido.id)
    savePedidosLocalStorage(pedido)
    modal.classList.remove('active')
    document.querySelector('.divPagamento').innerHTML =''
}








































