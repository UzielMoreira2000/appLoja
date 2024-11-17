
function userNow (){
    const userNow = document.querySelector('.userNow')
    const getAuth = getObjAuth()
    // console.log(getAuth)
    if(userNow){
        userNow.innerHTML = `Ola ${getAuth.user}!`
    }
}
userNow()

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
