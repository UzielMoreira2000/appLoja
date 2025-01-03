

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
  var tipo = ''
  var radios = {}
  var objetoExport = ``
  array.forEach(item => {
    if(item.categoria == 'AÇAIS'){
      radios = radiosCASE_exibePRODUTOS_e_ADICIONAIS(item, tipo)
      if(radios != {}){
        objetoExport += `
        <div  style="margin-bottom: -1.3em;">${radios.stringHTML || ''}</div>`
      }
    }
    objetoExport += ` <br>
      <input id="${item.id}" name="${radios.tipo}" type="${item.input}" 
        onclick="input_QUANTIDADE('${item.id}', '${item.categoria}')" >
      <label for="${radios.tipo}" class="label${item.id} item" >
        ${item.nome} 
      </label>
    `
  })
  return objetoExport;
}


function radiosCASE_exibePRODUTOS_e_ADICIONAIS(item, tipo){
  var objetoExport = {}
  if(item.id == 'copo200ml'){
    objetoExport = thisFunction_AÇAIS(item.tipo)
  }
  if(item.id == 'consumirnolocal'){
    objetoExport = thisFunction_FRETE(item.tipo)
  }
  if(objetoExport.tipo == undefined){
    objetoExport.tipo = item.tipo
  }
  return  objetoExport
}


function thisFunction_AÇAIS(tipo){
  const stringHTML = `<br> 
  <label for="${tipo}"><p> Selecione o Tamanho </p></label> `
  return  objetoExport = {
    stringHTML: stringHTML,
    tipo: tipo,
  }
}


function thisFunction_FRETE(tipo){
  const stringHTML = `<br>
  <label for="${tipo}"><p> Selecione o consumir no local </p></label> `
  return  objetoExport = {
    stringHTML: stringHTML,
    tipo: tipo,
  }
}


