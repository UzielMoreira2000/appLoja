

var objTransferManual = {}
var modalFinanceiro = document.querySelector('#modalFinanceiro')


function abrirNovoLancamento (){
    modalFinanceiro.showModal()    
}
function fecharNovoLancamento (){
    modalFinanceiro.close()
    objTransferManual = {}
}


function addNovoLancamento(){
    var totalRecebido       = 0
    var tipoPagamento       = ''   
    var tipoForma           = ''
    objTransferManual       = {}
    var novoPagamento       = {}
    var pagamento           = []
    var getFormas           = document.querySelectorAll(`.qtdItem`)
    const tipoLancamento    = document.querySelectorAll('.tipoLancamento')
    const comentario        = document.querySelector('.comentario').value
    tipoLancamento.forEach(tipo => {
        if(tipo.checked){
            tipoPagamento = tipo.classList[0]
        }
    })
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
    if(totalRecebido == 0 ){
        return
    }
    objTransferManual = {
        tipoPagamento       : tipoPagamento,
        data                : data_Time(),
        tipoTransferencia   : 'manual',
        pagamento           : pagamento,
        comentario          : comentario,
        id                  : data_Time().fullData,
        valor               : totalRecebido,
    }
    resetNovoLancamento()
    apiPost(objTransferManual, 'manual')
    retornaAppLoja_Financeiro()
}


function retornaAppLoja_Financeiro(){
    setTimeout(function retornaTime(){
        window.location='financeiro.html'
    },1000)
}


function resetNovoLancamento(){
    const itensChecked = document.querySelectorAll('input[type="checkbox"]')
    const itensQtd = document.querySelectorAll('.qtdItem')
    document.querySelector('.comentario').value = ''
    document.querySelector('#saida').checked = true
    itensChecked.forEach(itemChecked => {    
        itemChecked.checked = false
    })
    itensQtd.forEach(itemQtd => {
        itemQtd.remove()
    })
}


function labelInputValue_Pagamento(item, qtdItem=1){
    const labelItem = document.querySelector(`.${item}`)
    const checkItem = document.querySelector(`#${item}`)
    const textItem  = document.querySelector(`label.${item}`).textContent
    if (checkItem.checked) {
        labelItem.innerHTML += `
        <input class="qtdItem" id="qtd${item}" type="number" 
        value="${qtdItem}" min="0" >`        
    }
    if (!checkItem.checked) {
        labelItem.innerHTML = `${textItem}`
    }
}




















