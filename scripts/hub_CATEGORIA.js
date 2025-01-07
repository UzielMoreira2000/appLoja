

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
                <label for="tipo" ><p> Tipo de montagem </p></label>`
                opcoes_dos_adicionais()
            }
            categoria.itens.forEach(item => {
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
        }
    })
    div.innerHTML = html 
}


function opcoes_de_acai(){
    var html = ''
    const ADICIONAIS = get_ADICIONAIS_LocalStorage()
    ADICIONAIS.forEach(adicional => {
        console.log(adicional)
        html += ``
    });
    return html
  }








