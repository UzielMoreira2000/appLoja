 

 const PRODUTOS = [
  {
    id: 'leitecondensado', 
    nome:'Leite Condensado'  ,
    valor: 1, 
    premium: false
  },
  {
    id: 'caldadechocolate', 
    nome:'Calda de Chocolate',
    valor: 1, 
    premium: false
  },
  {
    id: 'caldademorango', 
    nome:'Calda de Morango'  ,
    valor: 1,
    premium: false
  },
  {
    id: 'Morango', 
    nome:'Morango'           ,
    valor: 1, 
    premium: false
  },
  {
    id: 'uva', 
    nome:'Uva'               ,
    valor: 1, 
    premium: false
  },
  {
    id: 'banana', 
    nome:'Banana'            ,
    valor: 1, 
    premium: false
  },
  {
    id: 'ovomaltine', 
    nome:'Ovomaltine'        ,
    valor: 1, premium: false
  },
  {
    id: 'leite ninho', 
    nome:'Leite Ninho'       ,
    valor: 1, 
    premium: false
  },
  {
    id: 'pacoca', 
    nome:'Paçoca'            ,
    valor: 1, 
    premium: false
  },
  {
    id: 'granola', 
    nome:'Granola'           ,
    valor: 1, 
    premium: false
  },
  {
    id: 'mem', 
    nome:'M&m'               ,
    valor: 3, 
    premium: true 
  },
  {
    id: 'kitkat', 
    nome:'Kit Kat'            ,
    valor: 4, 
    premium: true 
  },
  {
    id: 'nutella', 
    nome:'Nutella'           ,
    valor: 5, 
    premium: true 
  },
 ]

 localStorage.setItem("adicionaisAcai", JSON.stringify(PRODUTOS))


 function getAdcsLocalStorage(){
   const adicionais = JSON.parse(localStorage.getItem("adicionaisAcai")) || [] ;
   return adicionais
}


function printListaAdcs(){
  const printListaAdcs = document.querySelector('.printListaAdcs')
  PRODUTOS.forEach(produto => {
    printListaAdcs.innerHTML += `
      <input id="${produto.id}" name="${produto.nome}" type="checkbox" class="adcComum adc"
        onclick="labelInputValue_Item('${produto.id}',${produto.valor})">
      <label id="${produto.id}" for="">${produto.nome}</label>
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






























