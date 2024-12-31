

function exibirCategoria(categoria){
  const produtosInModal = document.querySelector('.produtosInModal')
  const produtos = getCATEGORIAS_LocalStorage(categoria)
  const listaDeProdutos = exibePRODUTOS_e_ADICIONAIS(produtos)
  produtosInModal.innerHTML =  `
    categoria : ${categoria} 
    <br> ${listaDeProdutos} `
  exibirAdicionais(categoria)
}


function exibirAdicionais(categoria){
  const adicionaisInModal = document.querySelector('.col-b')
  if(categoria === 'AÇAIS'){
    const adicionais = getADICIONAIS_LocalStorage()
    const listaDeAdicionais = exibePRODUTOS_e_ADICIONAIS(adicionais)
    adicionaisInModal.innerHTML = `${listaDeAdicionais}`
  }
  if(categoria != 'AÇAIS'){
    adicionaisInModal.innerHTML = ''
  }  
}


function exibePRODUTOS_e_ADICIONAIS(array){
  var radios = {}
  var conteudo_FOR = ''
  var objetoExport = ``
  array.forEach(item => {
    if(item.categoria == 'AÇAIS'){
      radios = radiosCASE_exibePRODUTOS_e_ADICIONAIS(item.id, conteudo_FOR)
      if(radios != {}){
        objetoExport += `
        <div  style="margin-bottom: -2em;">${radios.stringHTML || ''}</div>`
      }
    }
    objetoExport += ` <br>
      <input id="${item.id}" name="${radios.conteudoFOR}" type="${item.input}" 
        onclick="input_QUANTIDADE('${item.id}', '${item.categoria}')" >
      <label for="${radios.conteudoFOR}" class="label${item.id} item" >
        ${item.nome} 
      </label>
    `
  })
  return objetoExport;
}


function radiosCASE_exibePRODUTOS_e_ADICIONAIS(id, conteudoFOR){
  var objetoExport = {}
  if(id == 'copo200ml'){
    objetoExport = thisFunction_AÇAIS(conteudoFOR)
  }
  if(id == 'consumirnolocal'){
    objetoExport = thisFunction_FRETE(conteudoFOR)
  }
  return  objetoExport
}


function thisFunction_AÇAIS(conteudoFOR){
  conteudoFOR = 'AÇAIS'
  const stringHTML = `<br>
  <label for="${conteudoFOR}"><p> Selecione o Tamanho </p></label> `
  return  objetoExport = {
    stringHTML: stringHTML,
    conteudoFOR: conteudoFOR,
  }
}


function thisFunction_FRETE(conteudoFOR){
  conteudoFOR = 'FRETE'
  const stringHTML = `<br>
  <label for="${conteudoFOR}"><p> Selecione o consumir no local </p></label> `
  return  objetoExport = {
    stringHTML: stringHTML,
    conteudoFOR: conteudoFOR,
  }
}


