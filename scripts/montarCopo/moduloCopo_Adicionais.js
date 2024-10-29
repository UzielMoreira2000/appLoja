

const moduloAdicionais = () => {
    var totalAdc     = 0 
    var qtdItem      = 0
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
        switch (adicional) {
            case "leite condensado":
                adicional = 'leiteCondensado'
                break
            case "calda de morango":
                adicional = 'caldaDeMorango'
                break
            case "calda de chocolate":
                adicional = 'caldaDeChocolate'
                break
            case "leite ninho":
                adicional = 'leiteNinho'
                break
        }
        qtdItem = parseInt(document.getElementById(`qtd${adicional}`).value)
        listaAdcs.push(item = {
            qtdItem     : qtdItem,
            adicional   : adicional,
        })
        switch(adicional){
            case "nutella":
                addPremium += qtdItem*5
            break
            case "mem":
                addPremium += qtdItem*4
            break
            case "kitkat":
                addPremium += qtdItem*3
            break
            case "leiteCondensado":
                addComum += qtdItem
            break
            case "caldaDeMorango":
                addComum += qtdItem
            break
            case "caldaDeChocolate":
                addComum += qtdItem
            break
            case "leiteNinho":
                addComum += qtdItem
            break
            case "granola":
                addComum += qtdItem
            break
            case "pacoca":
                addComum += qtdItem
            break
            case "ovomaltine":
                addComum += qtdItem
            break
            case "morango":
                addComum += qtdItem
            break
            case "banana":
                addComum += qtdItem
            break
            case "uva":
                addComum += qtdItem
            break
        }       
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














