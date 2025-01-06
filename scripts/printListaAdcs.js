 

 const listaAdcs = [
  {nome:'leite condensado'  ,valor: 1, premium: false},
  {nome:'calda de chocolate',valor: 1, premium: false},
  {nome:'calda de morango'  ,valor: 1, premium: false},
  {nome:'morango'           ,valor: 1, premium: false},
  {nome:'uva'               ,valor: 1, premium: false},
  {nome:'banana'            ,valor: 1, premium: false},
  {nome:'ovomaltine'        ,valor: 1, premium: false},
  {nome:'leite ninho'       ,valor: 1, premium: false},
  {nome:'pacoca'            ,valor: 1, premium: false},
  {nome:'granola'           ,valor: 1, premium: false},
  {nome:'mem'               ,valor: 3, premium: true },
  {nome:'kitkat'            ,valor: 4, premium: true },
  {nome:'nutella'           ,valor: 5, premium: true },
 ]

 localStorage.setItem("adicionaisAcai", JSON.stringify(listaAdcs))


 function getAdcsLocalStorage(){
   const adicionais = JSON.parse(localStorage.getItem("adicionaisAcai")) || [] ;
   return adicionais
}


function printListaAdcs(){
  const printListaAdcs = document.querySelector('.printListaAdcs')
  listaAdcs.forEach(adc => {
      var nome_Split = adc.nome.split(' ')
      var nome_Split_Join =  nome_Split.join('')
      var nome = nome_Split_Join
    printListaAdcs.innerHTML += `
      <input id="${nome}" name="${adc.nome}" type="checkbox" class="adcComum adc"
        onclick="labelInputValue_Item('${nome}',${adc.valor})">
      <label id="${nome}" for="">${adc.nome}</label>
      <br>`
  })
}
printListaAdcs()


function labelInputValue_Item(item, valor){
  const labelItem = document.querySelector(`label#${item}`)
  const checkItem = document.querySelector(`#${item}`)
  if (checkItem.checked) {
    labelItem.innerHTML += `
    <input class="qtdItem" id="qtd${item}" type="number" value="1" min="1" >`
  }
  if (!checkItem.checked) {
    labelItem.innerHTML = `${labelItem.textContent}`
  }
}



























