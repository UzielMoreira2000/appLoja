

function exibirPedido(pedido, save){
    var objItem      = ''
    var objFrete     = ''
    var tamanhoCopo  = ''
    var objListaAdcs = ''
    const cardpedido = document.createElement("div")

    pedido.itens.forEach(item => {
        if(item.tipo == 'copo'){
            tamanhoCopo = + item.tamanhoCopo + ' ml'
            var text = '' 
            item.listaAdcs.forEach((i) =>{
                text += `${i.qtdItem}x ${i.adicional} <br>`
                objListaAdcs = `
                <b> Adicionais: </b><br> ${text} `
            })
        }
        objItem +=`<br>
            <b><p> ${item.tipoItem} ${tamanhoCopo} </p></b>
            <p>    Quantidade:  ${item.quantidade} x    </p>
            ${objListaAdcs} `
        tamanhoCopo  = ''
        objListaAdcs = ''
    })

    if(pedido.valorFrete > 0){
        objFrete = `<br><b>Frete:</b> ${pedido.valorFrete} R$`
    }
    if(pedido.valorFrete == 0){
        objFrete = ''
    }

    if(pedido.status != 'concluido'){
        cardpedido.innerHTML = `
            <div class="cardPedido ${pedido.id} ${pedido.status}">
                <button>
                <i class='moveRetorna bx bx-chevron-left'></i>
                </button>
                <button>
                <i class='moveProximo bx bx-chevron-right'></i> 
                </button>
                <br>
                Valor Pedido:  <b> ${pedido.valor} R$ </b>
                <br>
                <button class="btnCopos" onclick="verDetalhes('${pedido.id}')">
                Ver detalhes do pedido
                </button>
                <div class="copos invisivel" id="copos${pedido.id}">
                    ${objItem} 
                    ${objFrete}
                </div> 
                <br>
                <button>
                <i onclick="excluiPedidoLocalStorage('${pedido.id}')" class='excluir bx bx-x'></i>
                </button> 
                <button>
                <i onclick="editarPedido('${pedido.id}')"
                class='editar bx bx-pencil'></i>
                </button>
            </div> 
        `
    }
    if(pedido.status == 'concluido'){
        cardpedido.innerHTML = `
            <div class="cardPedido ${pedido.id} ${pedido.status}">
                Valor Pedido:${pedido.valor} 
                <br>
                <button class="btnCopos" onclick="verDetalhes('${pedido.id}')">
                Ver detalhes do pedido
                </button>
                <div class="copos invisivel" id="copos${pedido.id}">
                ${objItem} 
                </div> 
                <br>
            </div> 
        `
    }
    switch(pedido.status){
        case "fila":
            document.querySelector('.fila').appendChild(cardpedido)
        break
        case "preparo":
            document.querySelector('.preparo').appendChild(cardpedido)
        break
        case "entregando":
            document.querySelector('.entregando').appendChild(cardpedido)
        break
        case "concluido":
            document.querySelector('.concluido').appendChild(cardpedido)
        break
    }   
    if(save == 1){
        savePedidosLocalStorage(pedido)
    } 
}


function verDetalhes(id){
    const div = document.querySelector(`#copos${id}`)
    div.classList.toggle('invisivel')
}















