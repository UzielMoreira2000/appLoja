 

function abreModal(modalClass){
  const modal = document.querySelector(`.${modalClass}`)
  modal.showModal()
}

function fechaModal(modalClass){
  const modal = document.querySelector(`.${modalClass}`)
  modal.close()
}

function openInModal(categoria){
  const produtosInModal = document.querySelector('.produtosInModal')
  const produtos = ''
  const html = `categoria : ${categoria}`
  produtosInModal.innerHTML = html
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



























