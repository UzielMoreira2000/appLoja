

var itens = []


function addCopo() {
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


const resetCopo = () =>{
    acai.checked               = true
    copo200.checked            = true
    document.querySelector('#quantidade').value = 1
    uva.checked                = false
    mem.checked                = false
    banana.checked             = false
    pacoca.checked             = false
    kitkat.checked             = false
    nutella.checked            = false
    granola.checked            = false
    morango.checked            = false
    ovomaltine.checked         = false
    leiteNinho.checked         = false
    caldaDeMorango.checked     = false
    leiteCondensado.checked    = false
    caldaDeChocolate.checked   = false
    const adicionais = document.querySelectorAll(".acaiB input[type=number]")
    adicionais.forEach(adicional => {
        adicional.remove()
    })
}














