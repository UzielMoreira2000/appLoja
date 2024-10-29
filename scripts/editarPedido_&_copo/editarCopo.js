

var emEdicao = ''
var itemEdit = []


function editarItemNoCarrinho(id){
    resetCopo()
    var tamanhoCheck = 0
    var tipoCheck    = 0
    var qtdCheck     = 0
    var adcs         = []
    itens.forEach((item) =>{
        if(item.id == id){          
            itemEdit     = item
            emEdicao     = item.tipo
            tipoCheck    = item.tipoItem
            adcs         = item.listaAdcs
            qtdCheck     = item.quantidade
            tamanhoCheck = item.tamanhoCopo
        }
    })
    adcs.forEach((item) =>{
        document.querySelector(`#${item.adicional}`).checked = true
        labelInputValue_Adicionais(item.adicional, item.qtdItem)
    })
    quantidadeCopoInEdit(qtdCheck)
    tipoCopoInEdit(tipoCheck)
    tamanhoCopoInEdit(tamanhoCheck)
    exibirCardItemCarrinho()
    statusBtn("editandoCopo")
}


function btnEditCopo() {
    console.log(emEdicao)
    var itemDoPedido = {}
    if(emEdicao == 'copo'){
        itemDoPedido = {
            id: itemEdit.id,
            tipo            : 'copo',
            tipoItem        : f_tipo(),
            valorPorItem    : f_valorCopo(),
            quantidade      : f_qtdCopos(),
            tamanhoCopo     : f_tamanhoCopo(),
            listaAdcs       : moduloAdicionais().listaAdcs,
            adicionais      : moduloAdicionais().adicionais
        }
    }else{
        return console.log('err')
    }
    itens.forEach((item) =>{
        if(item.id == itemDoPedido.id){
            const cardItem = document.querySelector(`#cardInPrevia${itemDoPedido.id}`)
            cardItem.remove()
            const filtroItens = itens.filter(item => item.id != itemDoPedido.id)
            itens = filtroItens
        }
    })
    itens.push(itemDoPedido)
    carrinhoPedido.innerHTML = ''
    itens.forEach(item =>  exibirCardItemCarrinho(item))
    resetCopo()
    statusModalPedido()
    statusBtn("itemEditado")
    console.log(itens)
}


const tamanhoCopoInEdit = (tamanhoCheck) => {
    if(tamanhoCheck == 200){
        document.querySelector(`#copo200`).checked = true
        document.querySelector(`#copo300`).checked = false
        document.querySelector(`#copo500`).checked = false
    }
    if(tamanhoCheck == 300){
        document.querySelector(`#copo200`).checked = false
        document.querySelector(`#copo300`).checked = true
        document.querySelector(`#copo500`).checked = false
    }
    if(tamanhoCheck == 500){
        document.querySelector(`#copo200`).checked = false
        document.querySelector(`#copo300`).checked = false
        document.querySelector(`#copo500`).checked = true
    }
}


const tipoCopoInEdit = (tipoCheck) =>{
    if(tipoCheck == "Açai"){
        document.querySelector(`#acai`).checked = true
        document.querySelector(`#cupuacu`).checked = false
        document.querySelector(`#misto`).checked = false
    }
    if(tipoCheck == "Cupuaçu"){
        document.querySelector(`#acai`).checked = false
        document.querySelector(`#cupuacu`).checked = true
        document.querySelector(`#misto`).checked = false
    }
    if(tipoCheck == "Misto"){
        document.querySelector(`#acai`).checked = false
        document.querySelector(`#cupuacu`).checked = false
        document.querySelector(`#misto`).checked = true
    }
}


const quantidadeCopoInEdit = (qtdCheck) =>{
    document.querySelector(`#quantidade`).value = qtdCheck 
}











