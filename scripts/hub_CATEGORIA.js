

function opcoes_das_categorias(id){
    var tipo = ''
    var html = '<br>'
    const div = document.querySelector('.opcoes_das_categorias')
    const CATEGORIAS = get_CATEGORIAS_LocalStorage()
    CATEGORIAS.forEach(categoria => {
        if(id == categoria.id){
            if(id == 'acais'){
                tipo = 'name="tipo"'
                html += `
                <label for="tipo" id="tamanhoDosCopos">
                    <p> Tipo de montagem </p>
                </label>`
                opcoes_dos_adicionais()
            }
            var inputs_e_labels = 
            exibir_inputs_e_labels(categoria.itens, tipo, categoria)
            html += inputs_e_labels
        }
    })
    div.innerHTML = html 
}


function exibir_inputs_e_labels(itens, tipo, categoria){
    var html = ''
    itens.forEach(item => {
        html +=`
        <input ${tipo}
            type="${categoria.input}" 
            class=""
            id="${item.id}" 
            name="${item.nome}" 
            onclick="labelInputValue_Item(
            '${item.id}', '${item.valor}', '${categoria.id}'
        )">
        <label id="${item.id}" for="">
            ${item.nome}
        </label>
        <br>`
    });
    return html
}










