

function exibir_input_da_quantidade(item, valor, categoria){
    const labelItem = document.querySelector(`label#${item}`)
    const checkItem = document.querySelector(`#${item}`)
    if(categoria == 'acais'){
      const radios = document.querySelectorAll('.qtdItem')
      radios.forEach(radio => {
        radio.remove()
      })
    }
    if (checkItem.checked) {
      labelItem.innerHTML += `
      <input class="qtdItem qtdItemChecked" id="qtd${item}" 
        type="number" value="1" min="1" >`
    }
    if (!checkItem.checked) {
      labelItem.innerHTML = `${labelItem.textContent}`
    }
  }