

const urlApiProd = `https://script.google.com/macros/s/AKfycbw0vTCIJOsui2RndEfNFITXJ_D7Zb8TueVxn0sNq4oGJnH5lh3AunbWnl92GIvK9wbUgw/exec`


function apiPost(lancamento, tipo) {
    const stringPost = `
    <form method="post" action="${urlApiProd}" style="transform: scale(0.1);">
        <input type="text" name="id" value="   ${lancamento.id}">
        <input type="text" name="valor" value="${lancamento.valor}">
        <input type="text" name="ano" value=" ${lancamento.data.ano}">
        <input type="text" name="mes" value=" ${lancamento.data.mes}">
        <input type="text" name="dia" value=" ${lancamento.data.dia}">
        <input type="text" name="hora" value="${lancamento.data.hora}">
        <input type="text" name="min" value=" ${lancamento.data.min}">
        <textarea name="detalhes"> ${JSON.stringify(lancamento)}
        </textarea>
        <button id="setPedidoApi" type="submit"></button>
    </form> `
    if(tipo == 'automatico'){
        document.querySelector(".divPostForm").innerHTML = stringPost
    }
    if(tipo == 'manual'){
        document.querySelector(".divPostFormManual").innerHTML = stringPost
    }
    document.querySelector('#setPedidoApi').click()
}


function apiGet(){
    fetch(urlApiProd)
    .then((response) => response.json())
    .then((data) => {
        return data.lancamentos
    })
    .then((lancamentos) =>{
        localStorage.setItem("arrayGetApi", JSON.stringify([]))
        setItemLocalStorageApi(lancamentos)
        cabecalhoDatasHistorico() // chama hub exibe pedido
        document.querySelector('.carregandoPedidosNoHistorico').style.display = 'none'
    })
}









