


function addCopo() {
    moduloAdicionais()
    const objItem = {
        id                  : f_geraId(),
        tipo                : 'copo',
        tipoItem            : f_tipo(),
        quantidade          : f_qtdCopos(),
        valorPorItem        : f_valorCopo(),
        tamanhoCopo         : f_tamanhoCopo(),
        listaAdcs           : moduloAdicionais().listaAdcs,
        adicionais          : moduloAdicionais().adicionais,
    }
    itens.push(objItem)
    statusBtn("copoAdicionado")
    exibirCardItemCarrinho(itens) 
    resetCopo()
}


function resetCopo(){
    var inputsCheckAdcs = document.querySelectorAll(`input[type=checkbox]`)
    var inputsQtdAdcs = document.querySelectorAll(`.qtdItem`)
    inputsQtdAdcs.forEach(i => {
        i.remove()
    })
    inputsCheckAdcs.forEach(i => {
        i.checked = false
    })
    document.querySelector('#quantidade').value = 1
}














