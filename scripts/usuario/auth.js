

function getObjAuth(){
    const objAuth = JSON.parse(localStorage.getItem("objAuth")) || '0' ;
    return objAuth
}


function auth(){
    const objAuth = getObjAuth()
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
        password: password,
        data: data_Time()
    }))
    // checkAuth()
}


function checkAuth(){
    const objAuth = getObjAuth()
    // cria csv com usuario e senha, ler a tabela, 
    // jogar em um array, verificar se a string existe
    // caso exista pegar o retorno, comparar com o input
    // verificar se a senha da mesma linha é igual
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