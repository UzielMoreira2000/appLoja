

const opcoesConfig = document.querySelector('#opcoesConfig')
const dataManualDoPedido = document.querySelector('#dataManualDoPedido')


function abrir_dataManualDoPedido(){
    opcoesConfig.classList.toggle('invisivel')
}


function btnSalvarDataManualDoPedido(){
    const dataManual = document.querySelector('#dataManual').value 
    var data = dataManual.split('-')
    const obj = {
        dia     : data[2],
        mes     : data[1],
        ano     : data[0],
        hora    : data_Time().hora,
        min     : data_Time().min,
        sec     : data_Time().sec,
        fullData: data_Time().fullData
    }
    data = obj
    if(obj.dia==undefined || obj.mes==undefined || obj.ano==undefined){
        data = 0
    }
    hubDAtaTime(data)
}


function hubDAtaTime(manual=0){
    console.log(manual)
    var data = ''
    if(manual == 0 ){
        data = data_Time()
    }else{
      data = manual 
      const btn = document.querySelector('.feedbackData')
      btn.innerHTML += `data manual salva
        
      ` 
    }
    return data
}

