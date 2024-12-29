

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
  var copo = ''
  var counter = 0
  var objetoExport = ``
  array.forEach(item => {
    if(item.categoria == 'AÇAIS' && counter == 0){
      copo = 'copo'
      objetoExport += `
        <label for="copo"><p> Selecione o Tamanho </p></label> `
      counter ++
    }
    objetoExport += ` <br>
      <input id="${item.id}" name="${copo}" type="${item.input}" 
        onclick="input_QUANTIDADE('${item.id}', '${item.categoria}')" >
      <label for="${copo}" class="label${item.id} item" >
        ${item.nome} 
      </label>
    `
  })
  return objetoExport;
}