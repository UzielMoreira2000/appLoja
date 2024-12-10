

// const opcoesConfig = document.querySelector('#opcoesConfig')
// const dataManualDoPedido = document.querySelector('#dataManualDoPedido')


// function abrir_dataManualDoPedido(){
//     opcoesConfig.classList.toggle('invisivel')
// }


// function btnSalvarDataManualDoPedido(){
//     const feedbackData = document.querySelector('.feedbackData')
//     const dataManual = document.querySelector('#dataManual').value 
//     var data = dataManual.split('-')
//     const dia = data[2]
//     const mes = data[1]
//     const ano = data[0]

//     const fullData =`${
//     dia + mes + ano  + 
//     data_Time().hora + 
//     data_Time().min  + 
//     data_Time().sec  }`

//     const obj = {
//         dia     :   parseInt(dia),
//         mes     :   parseInt(mes),
//         ano     :   parseInt(ano),
//         hora    :   data_Time().hora,
//         min     :   data_Time().min,
//         sec     :   data_Time().sec,
//         fullData:   fullData,
//     }
//     if(obj.dia==undefined || obj.mes==undefined || obj.ano==undefined){
//         data = 0
//     }
//     if( parseInt(data_Time().dia) >= obj.dia &&
//         parseInt(data_Time().mes) >= obj.mes &&
//         parseInt(data_Time().ano) >= obj.ano) {
//         // console.log('ok')
//         feedbackData.innerHTML = `data manual salva` 
//         data = obj
//     }else{
//         const stringFeedback = `data lançada maior que a atual`
//         // console.log(stringFeedback)
//         const feedbackData = document.querySelector('.feedbackData')
//         feedbackData.innerHTML = `<p style="color: red;"> ${stringFeedback}</p>`
//         return
//     }
//     localStorage.setItem("dataPedido", JSON.stringify([1, data]))
//     return data
// }


// function hubDAtaTime(){
//     let data = 0
//     const dataPedido = JSON.parse(localStorage.getItem("dataPedido")) || [] ;
//     if(dataPedido[0] == 0 ){
//         data = data_Time()
//     }
//     if(dataPedido[0] == 1 ){
//       data = dataPedido[1]
//       const feedbackData = document.querySelector('.feedbackData')
//     }
//     localStorage.setItem("dataPedido", JSON.stringify(''))
//     return data
// }

