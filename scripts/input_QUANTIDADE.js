

function input_QUANTIDADE(id, categoria){
    var item_LocalStorage = getCATEGORIAS_LocalStorage(categoria, id)
    // console.log(item_LocalStorage)
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
            <input class="${id} qtdItem ${categoria} qtd${id}-${item_LocalStorage.tipo}" value="1" 
            id="${id}" type="number" min="1" >`
        }
    }
    if(!checkItem.checked) {
        labelItem.innerHTML = `${labelItem.textContent}`
    }
}


function radiosCASE_input_QUANTIDADE(categoria, id){
    var item = getCATEGORIAS_LocalStorage(categoria, id)
    const radios = getCATEGORIAS_LocalStorage(categoria, 0)
    radios.forEach(produto => {
        if(produto.id != id){
            const produtoDiferente = 
            document.querySelector(`.qtd${produto.id}-${item.tipo}`)
            if(produtoDiferente){
                produtoDiferente.remove()
            }
        }
    })
}



















