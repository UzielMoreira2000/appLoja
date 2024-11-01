

function exibeLancamentosManuais(pedido){
    var objPagamento     = ''
    var tipoDePagamento  = ''
    const cardcaixa = document.createElement("div")

    if(pedido.tipoPagamento === 'entrada'){
        tipoDePagamento     = 'entrada'
        tipoOperacao        = '+'
    }
    if(pedido.tipoPagamento === 'saida'){
        tipoDePagamento     = 'saida'
        tipoOperacao        = '-'
    }

    pedido.pagamento.forEach(formaPagamento => {
        objPagamento += `
        ${formaPagamento.forma}: ${formaPagamento.valor}R$ `
    })

    cardcaixa.innerHTML = `
        <section class="pointCardCaixa">
        <div class="cola">
            <img src="imagens/${tipoDePagamento}.svg" 
            style="transform: scale(1.2);
                background-color: var(--${tipoDePagamento}-financa-fundoIcone);
            ">
            <div class="formaPagamento"
                style="color: var(--${tipoDePagamento}-financa-light);">
                ( ${pedido.data.hora}: ${pedido.data.min} ) - ${objPagamento} 
            </div>
        </div>
        <div class="colb">
            <div class="valor${pedido.id}" 
            style="
                margin-top: 1.3em;
                color: var(--${tipoDePagamento}-financa-normal);
                font-weight: 700;
                font-size: 1.2em; ">
                <p class="getValue${pedido.data.mes}${pedido.id}"> 
                    ${pedido.valor} R$
                </p>
                <button class="btnCopos" onclick="verDetalhes('${pedido.id}')"
                    style="color: var(--${tipoDePagamento}-financa-normal);">
                    Ver detalhes 
                </button>
            </div>
            <div class="detalhesPedidoHistorico invisivel" 
                id="copos${pedido.id}">
                <b> Comentário: </b><br>
                ${pedido.comentario}
            </div>
        </div>
    </section>
    <br>
    `
    // var dia = 
    document.querySelector(`#novaDataHistorico${pedido.data.dia}`)
    // console.log(cardcaixa)
    
    // dia.appendChild(cardcaixa)
}













































































