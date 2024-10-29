

function data_Time(){
    const data = new Date()
    const dia  = String(data.getDate()).padStart(2, '0')
    const mes  = String(data.getMonth() + 1).padStart(2, '0')
    const ano  = String(data.getFullYear())
    const hora = String(data.getHours())
    const min  = String(data.getMinutes())
    const sec  = String(data.getSeconds())
    const full = `${dia + mes + ano + hora + min + sec}`
    time = {
        dia         : dia,
        mes         : mes,
        ano         : ano,
        min         : min, 
        sec         : sec,
        hora        : hora,
        fullData    : full,
    }
    return time
}


function mesExtenso(mes){
    var data = ''
    switch(mes){
        case 1:
            data = 'janeiro'
        break
        case 2:
            data = 'fevereiro'
        break
        case 3:
            data = 'março'
        break
        case 4:
            data = 'abril'
        break
        case 5:
            data = 'maio'
        break
        case 6:
            data = 'junho'
        break
        case 7:
            data = 'julho'
        break
        case 8:
            data = 'agosto'
        break
        case 9:
            data = 'setembro'
        break
        case 10:
            data = 'outubro'
        break
        case 11:
            data = 'novembro'
        break
        case 12:
            data = 'dezembro'
        break
    }
    return data
}


























