 

function labelInputValue_Item(item, valor, categoria){
  const labelItem = document.querySelector(`label#${item}`)
  const checkItem = document.querySelector(`#${item}`)
  // if(categoria == 'acais'){
  //   console.log(categoria)
  //   opcoes_de_acai = opcoes_de_acai()
  // }
  if (checkItem.checked) {
    const qtdItens = document.querySelectorAll('.qtdItem')
    console.log(qtdItens)
    qtdItens.forEach(i => {
      i.remove()
    });
    labelItem.innerHTML += `
    <input 
      class="qtdItem" 
      id="qtd${item}" 
      type="number" 
      value="1" min="1" >
    `
  }
  if (!checkItem.checked) {
    labelItem.innerHTML = `${labelItem.textContent}`
  }
}




function botoes_das_categorias(){
  document.querySelector('.opcoes_das_categorias').innerHTML = ''
  document.querySelector('.opcoes_dos_adicionais').innerHTML = ''
  var html = ''
  const div = document.querySelector('.botoes_das_categorias')
  const categorias = get_CATEGORIAS_LocalStorage()
  categorias.forEach(categoria => {
    // console.log(categoria)
    html += `
      <button id="${categoria.id}" style="margin-right: 1em;"
        onclick="opcoes_das_categorias('${categoria.id}')">
        ${categoria.nome}
      </button>`
  });
  div.innerHTML = html
}botoes_das_categorias()



function opcoes_dos_adicionais(){
  var html = '<p>Selecione os Adicionais </p>'
  const div = document.querySelector('.opcoes_dos_adicionais')
  const ADICIONAIS = get_ADICIONAIS_LocalStorage()
  ADICIONAIS.forEach(adicional => {
    console.log(adicional)
    html += `
      <input 
        type="checkbox" 
        class="adcComum adc"
        id="${adicional.id}" 
        name="${adicional.nome}" 
        onclick="labelInputValue_Item('${adicional.id}',${adicional.valor})"
      >
      <label id="${adicional.id}" for="">
        ${adicional.nome}
      </label>
      <br>`
  })
  div.innerHTML = html
}


















