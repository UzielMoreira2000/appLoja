

function labelInputValue_Adicionais(item, qtdItem=1) {
    const labelItem = document.querySelector(`.${item}`)
    const checkItem = document.querySelector(`#${item}`)
    const textItem  = document.querySelector(`label.${item}`).textContent
    if (checkItem.checked) {
        labelItem.innerHTML += `
        <input class="qtdItem" id="qtd${item}" type="number" value="${qtdItem}" min="1" >`
    }
    if (!checkItem.checked) {
        labelItem.innerHTML = `${textItem}`
    }
}


const f_tipo = () => {
    let tipo    = ''
    let acai    = document.querySelector('#acai')
    let misto   = document.querySelector('#misto')
    let cupuacu = document.querySelector('#cupuacu')
    if (acai.checked) {
        tipo    = 'Açai'
    }
    if (misto.checked) {
        tipo    = 'Misto'
    }
    if (cupuacu.checked) {
        tipo    = 'Cupuaçu'
    } 
    return tipo;
}


const f_tamanhoCopo  = () =>{
    var tamanhoCopo     = 0
    var copo200         = document.querySelector('#copo200')
    var copo300         = document.querySelector('#copo300')
    var copo500         = document.querySelector('#copo500')
    if (copo200.checked) {
        tamanhoCopo = 200;
    }
    if (copo300.checked) {
        tamanhoCopo = 300;
    }
    if (copo500.checked) {
        tamanhoCopo = 500;
    }
    return tamanhoCopo;
}


const f_precoUnitario  = () =>{
    var tamanhoCopo    = f_tamanhoCopo()
    var precoUnitario  = 0
    if (tamanhoCopo   == 200) {
        precoUnitario  = 10;
    }
    if (tamanhoCopo   == 300) {
        precoUnitario  = 15;
    }
    if (tamanhoCopo   == 500) {
        precoUnitario  = 19;
    }    
    return precoUnitario;
}


const f_qtdCopos = () =>{
    var qtdCopos = document.querySelector('#quantidade').value
    return qtdCopos;
}


const f_valorCopo = () =>{ 
    var contadorAdc = moduloAdicionais().totalAdc
    var valorCopo   = f_precoUnitario()
    valorCopo       = valorCopo + contadorAdc
    valorCopo       = valorCopo * f_qtdCopos() 
    return valorCopo;
}





