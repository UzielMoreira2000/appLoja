

const fila       = document.querySelector(".fila")
const preparo    = document.querySelector(".preparo")
const entregando = document.querySelector(".entregando")
const concluido  = document.querySelector(".concluido")


document.addEventListener("click", (e) => {
    var statusPedido = ''
    var targetEl     = e.target;
    var parentEl     = targetEl.closest("div")
    const id         = parentEl.classList[1]
    const pedidos    = getPedidosLocalStorage()

    if(parentEl.classList.contains("fila")){
        statusPedido = 'fila'
    }
    if(parentEl.classList.contains("preparo")){
        statusPedido = 'preparo'
    }
    if(parentEl.classList.contains("entregando")){
        statusPedido = 'entregando'
    }
    if(parentEl.classList.contains("concluido")){
        statusPedido = 'concluido'
    }

    if(targetEl.classList.contains("moveProximo")){
        switch(statusPedido){
            case "fila":
                statusPedido = "preparo"
                preparo.appendChild(parentEl)
                parentEl.classList.toggle("fila")
                parentEl.classList.toggle("preparo")
            break
            case "preparo":
                    statusPedido = "entregando"
                    entregando.appendChild(parentEl)
                    parentEl.classList.toggle("preparo")
                    parentEl.classList.toggle("entregando")
            break
            case "entregando":
                pagamento(id)
            break
        }
    }
    if(targetEl.classList.contains("moveRetorna")){
        switch(statusPedido){
            case "concluido":
                statusPedido = "entregando"
                entregando.appendChild(parentEl)
                parentEl.classList.toggle("concluido")
                parentEl.classList.toggle("entregando")
            break
            case "entregando":
                    statusPedido = "preparo"
                preparo.appendChild(parentEl)
                parentEl.classList.toggle("entregando")
                parentEl.classList.toggle("preparo")
                break
            case "preparo":
                statusPedido = "fila"
                fila.appendChild(parentEl)
                parentEl.classList.toggle("preparo")
                parentEl.classList.toggle("fila")
            break
        }
    }
    
    if(targetEl.classList.contains("excluir")){
        parentEl.remove();
        excluiPedidoLocalStorage(id)
    }
    
    pedidos.forEach((pedido) => {
        if(pedido.id == id){
            switch(statusPedido){
                case "fila":
                    pedido.status = "fila"
                break
                case "preparo":
                   pedido.status = "preparo"
                break
                case "entregando":
                    pedido.status = "entregando"
                break
                case "concluido":
                    pedido.status = "concluido"
                break
            }
        }
    }) 
    localStorage.setItem("arrayPedidos", JSON.stringify(pedidos))
})










