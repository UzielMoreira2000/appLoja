

function exibir_input_da_quantidade(item, valor, categoria){
    console.log(item,valor,categoria)
    const labelItem = document.querySelector(`label#${item}`)
    const checkItem = document.querySelector(`#${item}`)
    if(categoria == 'acais'){
      const radios = document.querySelectorAll('.qtdItem')
      radios.forEach(radio => {
        radio.remove()
      })
    }
    if (checkItem.checked) {
      html = verifica_radio_ou_checked(categoria)
      labelItem.innerHTML += html 
    }
    if (!checkItem.checked) {
      labelItem.innerHTML = `${labelItem.textContent}`
    }
  }


function verifica_radio_ou_checked(categoria){
  // console.log(categoria)
  html = ''
  var tipo = ''
  
  
  html = `
  <input class="qtdItem ${tipo}"
   id="qtd${categoria}" type="number" 
   value="1" min="1" >`

  return html  
}