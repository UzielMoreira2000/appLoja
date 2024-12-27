 

function abreModal(modalClass){
  const modal = document.querySelector(`.${modalClass}`)
  modal.showModal()
}

function fechaModal(modalClass){
  const modal = document.querySelector(`.${modalClass}`)
  modal.close()
}



function html_listaDeProdutos(produtos){
  var consenso = 0
  var objetoExport = ``
  produtos.forEach(produto => {
    if(produto.categoria == 'AÇAIS'){
      consenso = 1
    }else{
      consenso = 0
    }
    objetoExport += ` <br>
      <input id="${produto.id}" type="${produto.input}" 
      name="${produto.categoria}">
      <label for="${produto.categoria}"> ${produto.nome} </label>
    `
  })
  return objetoExport;
}

function html_listaDeAdicionais(adicionais){
  var objetoExport = ``
  adicionais.forEach(adicional => {
    objetoExport += ` <br>
      <input id="${adicional.id}" type="checkbox" name="${adicional.id}"
      onclick="labelInputValue_Adicionais('${adicional.nome}')" 
      ">
      <label for="${adicional.id}"> ${adicional.nome} </label>
    `
  })
  return objetoExport;
}

function exibirAdicionais(categoria){
  const adicionaisInModal = document.querySelector('.col-b')
  if(categoria === 'AÇAIS'){
    const adicionais = getADICIONAIS_LocalStorage()
    const listaDeAdicionais = html_listaDeAdicionais(adicionais)
    adicionaisInModal.innerHTML = `${listaDeAdicionais}`
  }
  if(categoria != 'AÇAIS'){
    adicionaisInModal.innerHTML = ''
  }
  
}

function exibirCategoria(categoria){
  
  const produtosInModal = document.querySelector('.produtosInModal')
  const produtos = getCATEGORIAS_LocalStorage(categoria)
  const listaDeProdutos = html_listaDeProdutos(produtos)
 
  produtosInModal.innerHTML =  `
    categoria : ${categoria} <br><br>
    produtos: ${listaDeProdutos}
  `
  exibirAdicionais(categoria)
}




//  function getAdcsLocalStorage(){
//    const adicionais = JSON.parse(localStorage.getItem("adicionaisAcai")) || [] ;
//    return adicionais
// }


// function printListaAdcs(){
//   const printListaAdcs = document.querySelector('.printListaAdcs')
//   listaAdcs.forEach(adc => {
//       var nome_Split = adc.nome.split(' ')
//       var nome_Split_Join =  nome_Split.join('')
//       var nome = nome_Split_Join
//     printListaAdcs.innerHTML += `
//       <input id="${nome}" name="${adc.nome}" type="checkbox" class="adcComum adc"
//         onclick="labelInputValue_Item('${nome}',${adc.valor})">
//       <label id="${nome}" for="">${adc.nome}</label>
//       <br>`
//   })
// }
// printListaAdcs()


// function labelInputValue_Item(item, valor){
//   const labelItem = document.querySelector(`label#${item}`)
//   const checkItem = document.querySelector(`#${item}`)
//   if (checkItem.checked) {
//     labelItem.innerHTML += `
//     <input class="qtdItem" id="qtd${item}" type="number" value="1" min="1" >`
//   }
//   if (!checkItem.checked) {
//     labelItem.innerHTML = `${labelItem.textContent}`
//   }
// }



























