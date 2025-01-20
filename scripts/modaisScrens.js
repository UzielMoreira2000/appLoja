
const topo          = document.querySelector(".topo p")
const colunaA       = document.querySelector('.col-a')
const colunaB       = document.querySelector('.col-b')
const colunaC       = document.querySelector('.col-c')
const modal         = document.querySelector('.modal-container')
const btnNovoPedido = document.querySelector('#btnNovoPedido')
const btnAtualizar  = document.querySelector('#btnAtualizar')


function novo_pedido(){
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
  status_do_Modal('Montando')
  carrinhoPedido.innerHTML = ''
  exibir_botoes_das_categorias()
}


function status_do_Modal (paramametro){
  const statusPedido  = document.querySelector(".statusPedido") 
  statusPedido.innerHTML = paramametro + ' Pedido'
}





