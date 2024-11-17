

const moduloAdicionais = () => {
    var totalAdc     = 0 
    var addComum     = 0
    var addPremium   = 0
    var listaRefAdcs = {}
    var adcsCheck    = []
    var listaAdcs    = []
    var adicionais   = []
    var adcs         = document.querySelectorAll(".adc")

    for (let i = 0; i < adcs.length; i++) {
        if (adcs[i].checked) {
            adcsCheck.push(`${adcs[i].name}`)
        }
    }

    adcsCheck.forEach(adicional => {
        let nameId = adicional.split(' ').join('')
        let listaAdcsLocalStorage  = getAdcsLocalStorage()
        let qtdItem = parseInt(document.querySelector(`#qtd${nameId}`).value)
        listaAdcs.push({
            qtdItem     : qtdItem,
            adicional   : adicional,
        })
        listaAdcsLocalStorage.forEach(i => {
            if(adicional == i.nome){
                if(i.premium == false){
                    addComum += qtdItem * i.valor
                }
                if(i.premium == true){
                    addPremium += qtdItem * i.valor
                }
            }
        })
        adicionais.push(adicional) 
    })

    if( addComum <= 3){
        addComum = 0
    }
    if( addComum >= 3){
        addComum = addComum - 3
    }  

    totalAdc = addComum + addPremium
    listaRefAdcs = {
        totalAdc: totalAdc, 
        listaAdcs: listaAdcs,
        adicionais: adicionais
    }

    return listaRefAdcs;
}














