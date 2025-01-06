

const carrinhoPedido = document.querySelector(".carrinhoPedido")

function funcaoIinfoCarrinho(){
    var valor        = 0
    var qtdItens     = 0
    var infoCarrinho = document.querySelector(".infoCarrinho")
    itens.forEach((item) =>{
        qtdItens    ++
        valor +=  parseFloat(new Number(item.valorPorItem).toFixed(1))
    })  
    valor += valorFrete
    infoCarrinho.innerHTML = `
    Total: ${valor}R$ - Quantidade Itens:${qtdItens}x `
    return valor
}

































