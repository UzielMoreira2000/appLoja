
function getObjAuth(){
    const objAuth = JSON.parse(localStorage.getItem("objAuth")) || '0' ;
    return objAuth
}


function auth(){
    const objAuth = getObjAuth()
    console.log(objAuth)
    if(objAuth==0){
        // window.location='pages/login.html'
        return
    }else{
        return
    }
}


function postDataLogin(){
    const user = document.querySelector('#nameLogin').value
    const password = document.querySelector('#senhaLogin').value
    localStorage.setItem("objAuth", JSON.stringify({
        user: user,
        password: password
    }))
    console.log(user)
    checkAuth()
}


function checkAuth(){
    const objAuth = getObjAuth()
    console.log(objAuth)
    if(objAuth.user == 'juliana'){
        if(objAuth.password == 123){
            window.location='../AppLoja.html'
        }
    }
}


function logOut(){
    localStorage.setItem("objAuth", JSON.stringify('0'))
    onload()
}