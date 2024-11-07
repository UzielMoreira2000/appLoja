 

 const listaAdcs = [
   'leite condensado','calda de chocolate','calda de morango',
   'morango','uva','banana',
   'ovomaltine','leite ninho','paçoca','granola',
   'mem','kitkat','nutella'
 ]


 function printListaAdcs(){
    const printListaAdcs = document.querySelector('.printListaAdcs')
    listaAdcs.forEach(adc => {
        var i_Split = adc.split(' ')
        var i_Split_Join =  i_Split.join('')
        var i = i_Split_Join
        console.log(i)
      printListaAdcs.innerHTML += `<br>
       <input id="${i}" name="${i}" type="checkbox" class="adcComum adc"
         onclick="labelInputValue_Item('${i}')">

         <label id="${i}" for="">${adc}</label>
      `
    })
 }


 function labelInputValue_Item(item, qtdItem=1){
   const labelItem = document.querySelector(`input#${item}`)
   console.log(labelItem)
   console.log(item)
}



























