

function labelInputValue_Frete (valor=1){
    const labelItem = document.querySelector(`label#entregar`)
    const checkItem = document.querySelector(`input#entregar`)
    const textItem  = document.querySelector(`label.entregar`).textContent
    const checkLocal = document.querySelector(`input#estabelecimento`)
    if (checkItem.checked) {
        labelItem.innerHTML = `${textItem}
        <div class="divFrete">
            <input class="qtdItem" id="qtdentregar" 
            type="number" 
            value="${valor}" min="1" onclick="calculaFrete()">
        </div>  `        
    }
    if (checkLocal.checked) {
        console.log(checkLocal)
        valorFrete = 0
        labelItem.innerHTML = `${textItem}`
    }
}


var valorFrete = 0
function calculaFrete(){
    valorFrete = parseInt(document.querySelector('#qtdentregar').value)
    console.log(valorFrete)
    funcaoIinfoCarrinho()
    return valorFrete
}





