

function input_QUANTIDADE(id, categoria){
    // console.log(categoria, id)
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
            <input class="qtdItem ${categoria}" id="qtd${id}" type="number" value="1" min="1" >`
        }
    }
    if(!checkItem.checked) {
        labelItem.innerHTML = `${labelItem.textContent}`
    }
}


function radiosCASE_input_QUANTIDADE(categoria, id){
    // console.log(categoria, id)
    var item = getCATEGORIAS_LocalStorage(categoria, id)
    console.log(item)
    var tipo = getTipoItemDataBase_LocalSorage(item.tipo, categoria)
    console.log(tipo)

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



















