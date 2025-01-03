

function input_QUANTIDADE(id, categoria){
    var item_LocalStorage = getCATEGORIAS_LocalStorage(categoria, id)
    console.log(item_LocalStorage)
    const item = document.querySelector(`#qtd${id}`)
    const checkItem = document.querySelector(`#${id}`)
    const labelItem = document.querySelector(`.label${id}`)
    if(categoria == 'AÇAIS'){
        radiosCASE_input_QUANTIDADE(categoria, id)
        if(item){
            return
        }
    }
    if(!item){        
        if (checkItem.checked) {
            labelItem.innerHTML += `<br>
            <input class="qtdItem ${categoria}" 
            id="qtd${id}-${item_LocalStorage.tipo}" type="number" value="1" min="1" >`
        }
    }
    if(!checkItem.checked) {
        labelItem.innerHTML = `${labelItem.textContent}`
    }
}


function radiosCASE_input_QUANTIDADE(categoria, id){
    var item = getCATEGORIAS_LocalStorage(categoria, id)
    const radios = getCATEGORIAS_LocalStorage(categoria)
    radios.forEach(produto => {
        if(produto.id != id){
            const produtoDiferente = 
            document.querySelector(`#qtd${produto.id}-${item.tipo}`)
            if(produtoDiferente){
                produtoDiferente.remove()
            }
        }
    })
}



















