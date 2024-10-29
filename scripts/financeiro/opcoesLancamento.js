

var opcoes = []

const opcoesSaida = [
    "outros",
    "marajo Açai", "duas Imãs", "cometa", "verdurão soares",
    "frutos da terra", "shoope", "reserva para aluguel", "internet",
    "salario", "99entregas", "retirada de caixa", "americanas",
]
const opcoesEntrada = [
    "outros",
    "pagamento inadimplência", "projeto", "extorno de pedido", "lamçamento atrasado" ,  
]

function checkOpcaoLancamento(tipo='saida'){
    const selectElement = document.getElementById('cliente-select')
    selectElement.innerHTML = ''
    if(tipo == 'saida'){
        opcoes = opcoesSaida
    }
    if(tipo == 'entrada'){
        opcoes = opcoesEntrada
    }    
    opcoes.forEach((opcao, i) => {
        const option = document.createElement('option')
        option.value = `opcao${i ++}`
        option.textContent = opcao 
        selectElement.appendChild(option) 
    })
    opcoes = ''
}

checkOpcaoLancamento()
















































