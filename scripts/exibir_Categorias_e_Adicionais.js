 

var cagoriaAtual = ''

function exibir_botoes_das_categorias(){
  document.querySelector('.opcoes_das_categorias').innerHTML = ''
  document.querySelector('.opcoes_dos_adicionais').innerHTML = ''
  var html = ''
  const div = document.querySelector('.botoes_das_categorias')
  const categorias = get_CATEGORIAS_LocalStorage()
  categorias.forEach(categoria => {
  html += `
    <button id="${categoria.id}" style="margin-right: 1em;"
      onclick="opcoes_das_categorias('${categoria.id}')">
      ${categoria.nome}
    </button>`
  })
  div.innerHTML = html
}


function opcoes_das_categorias(parmCategoria){
  cagoriaAtual = parmCategoria
  var tipo = ''
  var html = '<br>'
  const div = document.querySelector('.opcoes_das_categorias')
  const CATEGORIAS = get_CATEGORIAS_LocalStorage()
  CATEGORIAS.forEach(categoria => {
      if(parmCategoria == categoria.id){
        if(parmCategoria == 'acais'){
          tipo = 'name="tipo"'
          html += `
          <label for="tipo" id="tamanhoDosCopos">
            <p> Tipo de montagem </p>
          </label>`
          exibir_adicionais()
        }
        var inputs_e_labels = 
        exibir_inputs(categoria.itens, tipo, categoria)
        html += inputs_e_labels
      }
  })
  div.innerHTML = html 
}


function exibir_inputs(itens, tipo, categoria){
  var html = ''
  itens.forEach(item => {
      html +=`
      <input ${tipo}
          type="${categoria.input}" 
          class=""
          id="${item.id}" 
          name="${item.nome}" 
          onclick="exibir_exibir_input_da_quantidade(
          '${item.id}', '${item.valor}', '${categoria.id}'
      )">
      <label id="${item.id}" for="">
          ${item.nome}
      </label>
      <br>`
  });
  return html
}


function exibir_adicionais(){
  var html = '<p>Selecione os Adicionais </p>'
  const div = document.querySelector('.opcoes_dos_adicionais')
  const ADICIONAIS = get_ADICIONAIS_LocalStorage()
  ADICIONAIS.forEach(adicional => {
    html += `
      <input 
        type="checkbox" 
        class="adcComum adc"
        id="${adicional.id}" 
        name="${adicional.nome}" 
        onclick="exibir_exibir_input_da_quantidade('
        '${item.id}', '${item.valor}', '${categoria.id}'
      )">
      <label id="${adicional.id}" for="">
        ${adicional.nome}
      </label>
      <br>`
  })
  div.innerHTML = html
}
























