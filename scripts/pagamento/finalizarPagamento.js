

function labelInputValue_Pagamento(item, qtdItem=1) {
    const labelItem = document.querySelector(`.${item}`)
    const checkItem = document.querySelector(`#${item}`)
    const textItem  = document.querySelector(`label.${item}`).textContent
    if (checkItem.checked) {
        labelItem.innerHTML += `
        <input class="inputValuePagamento qtdItem" id="qtd${item}" type="number" 
        value="${qtdItem}" min="0" onclick="calculadoraPagamento()" >`        
    }
    if (!checkItem.checked) {
        labelItem.innerHTML = `${textItem}`
    }
    calculadoraPagamento()
}


function calculadoraPagamento() {
    var totalRecebido  = 0
    var novoPagamento  = {}
    var Arraypagamento = []
    var getFormas       = document.querySelectorAll(`.qtdItem`)
    getFormas.forEach(forma => {
        totalRecebido   += parseFloat( new Number(forma.value).toFixed(1))
        valorForma      =  parseFloat( new Number(forma.value).toFixed(1)) 
        tipoForma       =  forma.parentElement.classList.value
        novoPagamento = {
            valor: valorForma,
            forma: tipoForma
        }
        Arraypagamento.push(novoPagamento)
    }) 
    var id = parseInt(document.querySelector('.idPedidoPagamento').textContent)
    const pedido = buscaPedido(id)
    const total  = pedido.valor
    valoraPagar  = total - totalRecebido
    document.querySelector('.valor-a-Pagar').innerHTML = `${parseFloat(new Number(valoraPagar).toFixed(1))} R$`
    if(valoraPagar == 0){
        document.querySelector('.aceitarFormaPagamento')
        .classList.remove('invisivel')
    }
    else{
        document.querySelector('.aceitarFormaPagamento').classList.add('invisivel')
    }
}


function aceitarFormaPagamento(){
    var tipoForma           = ''
    var totalRecebido       = 0
    var novoPagamento       = {}
    var pagamento           = []
    var getFormas           = document.querySelectorAll(`.qtdItem`)
    getFormas.forEach(forma => {
        totalRecebido   += parseInt(forma.value)
        valorForma      =  parseInt(forma.value) 
        tipoForma       =  forma.parentElement.classList.value
        novoPagamento = {
            valor: valorForma,
            forma: tipoForma
        }
        pagamento.push(novoPagamento)
    }) 
    var idPedido = parseInt(document.querySelector('.idPedidoPagamento').textContent)
    var lancamento = buscaPedido(idPedido)
    lancamento.status = 'concluido'
    lancamento.pagamento = pagamento
    console.log(lancamento)
    salvaPosicaoPedidoMovido(lancamento.status, lancamento.id)
    apiPost(lancamento, 'automatico')
    retornaAppLoja_Home()
}


function retornaAppLoja_Home(){
    document.querySelector('.divPagamento').innerHTML =''
    setTimeout(function retornaTime(){
        window.location='AppLoja.html'
    },1000)
}









