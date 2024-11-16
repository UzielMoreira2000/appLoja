

const f_geraId = () => {
    var lastId = 0
    itens.forEach((item) => {
        lastId = parseInt(item.id)
    })
    lastId++
    return lastId;
}


// (item) espera receber => bebida,salgado,doce
function addItem(item){
    var qtdItem      = 0
    var valorPorItem = 0
    var itensCheck   = []
    var getItens     = document.querySelectorAll(`.${item}`)
    getItens.forEach(item => {
        if(item.checked){
            itensCheck.push(item.attributes.id.nodeValue)
        }
    })
    itensCheck.forEach(i => {
        qtdItem      = calculaItem(i).qtdItem
        nomeItem     = calculaItem(i).nomeItem
        valorPorItem = calculaItem(i).valorPorItem
        const objItem = {
            id             : f_geraId(),
            tipo           : `${item}`,
            tipoItem       : nomeItem,
            quantidade     : qtdItem,
            valorPorItem   : valorPorItem,
            tamanhoCopo    : 0,
            listaAdcs      : [],
            adicionais     : nomeItem,
        }
        itens.push(objItem)
        valorPorItem = 0
    })
    exibirCardItemCarrinho(itens)  
    resetItensSelecionados()
}


function calculaItem(item){
    var nomeItem = ''
    valorPorItem = 0
    var objExport= {}
    var qtdItem  = parseInt(document.getElementById(`qtd${item}`).value)
    switch(item){
    // BEBIDAS 
        case "cocacola":
            valorPorItem += qtdItem*5
            nomeItem = 'Coca-Cola'
        break
        case "guarana":
            valorPorItem += qtdItem*4
            nomeItem = 'Guaraná'
        break
        case "aguacomgas":
            valorPorItem += qtdItem*3
            nomeItem = 'Água com Gás'
        break
        case "aguasemgas":
            valorPorItem += qtdItem*2
            nomeItem = 'Água sem Gás'
        break
    // SALGADOS
        case "cronycebola":
            valorPorItem += qtdItem*4
            nomeItem = 'Crony Cebola'
        break
        case "cronychurrasco":
            valorPorItem += qtdItem*4
            nomeItem = 'Crony Churrasco'
        break
        case "refinatapicanhaealho":
            valorPorItem += qtdItem*4
            nomeItem = 'Refinata Picanha e Alho'
        break
        case "refinatacostelinha":
            valorPorItem += qtdItem*4
            nomeItem = 'Refinata Costelinha'
        break           
    // DOCES
        case "pirulitoBig":
            valorPorItem += qtdItem*0.50
            nomeItem = 'Pirulito Big'
        break
        case "paçoca":
            valorPorItem += qtdItem*0.50
            nomeItem = 'Paçoca'
        break
        case "kitKat":
            valorPorItem += qtdItem*4
            nomeItem = 'KitKat'
        break
        case "balasMacias":
            valorPorItem += qtdItem*0.20
            nomeItem = 'Balas Macias'
        break
        case "balasFregells":
            valorPorItem += qtdItem*0.20
            nomeItem = 'Balas Fregells'
        break
    }
    objExport = {
        qtdItem      : qtdItem,
        nomeItem     : nomeItem,
        valorPorItem : valorPorItem,
    }
    return objExport
}


function excluirItem(id){
    const cardItem    = document.querySelector(`#cardInPrevia${id}`)
    const filtroItens = itens.filter((item) => item.id != id )
    itens = filtroItens
    cardItem.remove()
    funcaoIinfoCarrinho() 
}


function resetItensSelecionados() {
    const qtdCopos = document.querySelector('#quantidade')
    const itensNumber = document.querySelectorAll(".opcoes input[type=number]")
    itensNumber.forEach(item => {
        if(item != qtdCopos){   
            item.remove()
        }
    })
    const itensCheck = document.querySelectorAll(".opcoes input[type=checkbox]")
    itensCheck.forEach(item => {
        if(item.checked){
            item.checked = false
        }
    })
}

