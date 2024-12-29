

function input_QUANTIDADE(id, categoria){
    const item = document.querySelector(`#qtd${id}`)
    const checkItem = document.querySelector(`#${id}`)
    const labelItem = document.querySelector(`.label${id}`)
    if(categoria == 'AÇAIS'){
        radios_CASE(id, categoria)
        if(item){
            return
        }
    }
    if(!item){        
        if (checkItem.checked) {
            labelItem.innerHTML += `
            <input class="qtdItem ${categoria}" id="qtd${id}" type="number" value="1" min="1" >`
        }
        if (!checkItem.checked) {
            labelItem.innerHTML = `${labelItem.textContent}`
        }
    }
}


function radios_CASE(id, categoria){
    const radios = getCATEGORIAS_LocalStorage(categoria)
    radios.forEach(produto => {
        if(produto.id != id){
            const produtoDiferente = document.querySelector(`#qtd${produto.id}`)
            if(produtoDiferente){
                produtoDiferente.remove()
            }
        }
    })
}



















