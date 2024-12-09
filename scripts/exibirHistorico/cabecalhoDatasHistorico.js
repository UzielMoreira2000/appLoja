

const dadosHistorico = document.querySelector('.dadosHistorico')


function cabecalhoDatasHistorico(){
    var dia       = 0
    var arrayData = []
    var listaDias = []
    var spanNovaData  = ''
    const lancamentos = getLancamentosApiLocalStorage()
    lancamentos.forEach(lancamento => {
        dia = parseInt(lancamento.data.dia)
        mes = parseInt(lancamento.data.mes)
        ano = parseInt(lancamento.data.ano)
        listaDias.push(dia)
        arrayData.push({
            dia: dia,
            mes: mes,
            ano: ano,
        })
    })
    const dias = new Set(listaDias)
    arrayData.forEach(data => {
        spanNovaData = `
        <div class="novaDataHistorico" id="novaDataHistorico${data.dia}">
            <span class="topoData"><br>
                ${data.dia}
                ${mesExtenso(parseInt(data.mes))}
                ${data.ano} - R$
                ${totalDiaSelect(data).dia} , dinheiro: ${totalDiaSelect(data).dinheiro}
            </span>
        </div>`
        ultimoSpan = document.querySelector(`#novaDataHistorico${data.dia}`)
        if(ultimoSpan){
            return
        }else{
            containerExibeCaixas.innerHTML += spanNovaData 
        }
    })
    HUB_Manual_ou_Automatico(dias)
}


function HUB_Manual_ou_Automatico(dias){
    const lancamentosOrdenados = ordenarLancamentos()
    lancamentosOrdenados.forEach(lancamento => {
        dias.forEach(dia => {
            if(lancamento.data.dia == dia){
                if(lancamento.tipoTransferencia == 'automatica' ){
                    exibeLancamentosAutomaticos(lancamento)
                }
                if(lancamento.tipoTransferencia == 'manual'){
                    exibeLancamentosManuais(lancamento)
                }
            }
        })
    })
}


function ordenarLancamentos(){
    const lancamentos = getLancamentosApiLocalStorage()  
    lancamentos.forEach(i => {
        i.data.fullData = parseInt(i.data.fullData)
        // console.log(i)
    });
    const lancamentosOrdenados = lancamentos.sort((a, b) => {
        a.data.fullData - b.data.fullData
    })
    // console.log(lancamentosOrdenados)
    return lancamentosOrdenados ;
}







