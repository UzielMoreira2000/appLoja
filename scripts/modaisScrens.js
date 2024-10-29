
const topo          = document.querySelector(".topo p")
const colunaA       = document.querySelector('.col-a')
const colunaB       = document.querySelector('.col-b')
const colunaC       = document.querySelector('.col-c')
const modal         = document.querySelector('.modal-container')
const btnNovoPedido = document.querySelector('#btnNovoPedido')
const btnAtualizar  = document.querySelector('#btnAtualizar')


btnNovoPedido.addEventListener("click", () =>{
    modal.classList.add('active')
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
    btnAtualizar.addEventListener("click", ()=>{
      modal.classList.remove('active')
      location.reload();
    })
    carrinhoPedido.innerHTML = ''
    statusModalPedido("montando")
    itens = itens
})


const statusModalPedido = (paramametro, idPedido) =>{
    const statusPedido  = document.querySelector(".statusPedido")
    const textIdPedido  = document.querySelector(".idPedidoInEdit")  
    if (paramametro == "editando"){
        textIdPedido.innerHTML = idPedido    
        statusPedido.innerHTML = 'Editando Pedido'
    }
    if (paramametro == "montando"){
        statusPedido.innerHTML = 'Montando Pedido'        
        textIdPedido.innerHTML = ''        
    }
}

// ------------- Troca de Tela ------------------

const containerPedido     = document.querySelector("#containerPedido")
const containerHistorico  = document.querySelector("#containerHistorico")
const containerFinanceiro = document.querySelector("#containerFinanceiro")


// ------------- Troca de Telas no modal ------------------
// btn add ao pedido
const btnAddCopo     = document.querySelector('#btnAddCopo')
const btnAddBebidas  = document.querySelector('#btnAddBebidas')
// const btnAddDoces = document.querySelector('#btnAddDoces')
const btnAddSalgados = document.querySelector('#btnAddSalgados')
// btn display
const btnAcai       = document.querySelector('#btnAcai')
// const btnDoces = document.querySelector('#btnDoces')
const btnBebidas    = document.querySelector('#btnBebidas')
const btnSalgados   = document.querySelector('#btnSalgados')
// content
// const doces         = document.querySelector(".doces")
const acaiColA      = document.querySelector(".acai")
const acaiColB      = document.querySelector(".acaiB")
const bebidas       = document.querySelector(".bebidas")
const salgados      = document.querySelector(".salgados")


btnAcai.addEventListener("click", () =>{
//  content
    salgados.style.display = "none" 
    // doces.style.display = none" 
    acaiColA.style.display = "block" 
    acaiColB.style.display = "block"
//  btn display
    btnAddBebidas.style.display  = "none" 
    // btnAddDoces.style.display = "none" 
    btnAddSalgados.style.display = "none" 
    btnAddCopo.style.display = "block"
})


btnBebidas.addEventListener("click", () =>{
//  content
    acaiColA.style.display = "none" 
    acaiColB.style.display = "none" 
    // doces.style.display    = "none" 
    salgados.style.display = "none" 
    bebidas.style.display  = "block" 
//  btn display
    // btnAddDoces.style.display    = "none" 
    btnAddSalgados.style.display = "none" 
    btnAddCopo.style.display     = "none" 
    btnAddBebidas.style.display  = "block"
})


btnSalgados.addEventListener("click", () =>{
//  content
    acaiColA.style.display = "none" 
    acaiColB.style.display = "none" 
    // doces.style.display    = "none" 
    bebidas.style.display  = "none" 
    salgados.style.display = "block" 
//  btn display
    // btnAddDoces.style.display    = "none" 
    btnAddCopo.style.display     = "none" 
    btnAddBebidas.style.display  = "none"
    btnAddSalgados.style.display = "block" 
})


// btnDoces.addEventListener("click", () =>{
//     acaiColA.style.display = "none" 
//     acaiColB.style.display = "none" 
//     salgados.style.display = "none" 
//     bebidas.style.display  = "none" 
//     doces.style.display    = "block" 
//     btnAddSalgados.style.display = "none" 
//     btnAddCopo.style.display     = "none" 
//     btnAddBebidas.style.display  = "none"
//     btnAddDoces.style.display    = "block" 
// })

// -------- Monta Pedido ------------































