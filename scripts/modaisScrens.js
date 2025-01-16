
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
  itens = itens
})


const status_do_Modal = (paramametro, idPedido) =>{
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





