

function exibirCardItemCarrinho(){
    carrinhoPedido.innerHTML = ''
    itens.forEach(item => {
        var tamanhoCopo = ''
        var listaAdcs   = ''
        var buttonEdit  = ''
        if(item.tipo == 'copo'){
            tamanhoCopo = item.tamanhoCopo+'ml'
            buttonEdit = `
                <button id="" class="" onclick="editarItemNoCarrinho(${item.id})">
                    <i class='editarCopoInPrevia bx bx-pencil'></i>
                </button> `
            item.listaAdcs.forEach(objAdicional => {
                let text = `${objAdicional.qtdItem}x ${objAdicional.adicional}<br>`
                listaAdcs += text
            })
        }
        carrinhoPedido.innerHTML += `
        <div id="cardInPrevia${item.id}" class="cardInPrevia ${item.id}">
            <b>   ${item.tipo}  #${item.id} </b>
            <br>
            ${item.tipoItem} ${tamanhoCopo} - ${item.quantidade}x 
            <br>
            Preço: ${parseFloat(Number(item.valorPorItem).toFixed(1))}R$  
            <br>
            ${listaAdcs}
            <button id="" class="" onclick="excluirItem(${item.id})">
                <i class='excluirCopoPrevia bx bx-x'></i> 
            </button>
            ${buttonEdit}           
        </div>  `
        var buttonEdit  = ''
    })
    funcaoIinfoCarrinho() 
    statusBtn('itemAdicionado')
}







