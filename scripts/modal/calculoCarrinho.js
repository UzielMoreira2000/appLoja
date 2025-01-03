

var PRODUTO = {
    nome: '',
    valor:0 ,
    id: '',               //nome sem espaços
    categoria:    '',     //CATEGORIAS[i]
    adicionais: '',       //{objetoADICIONAIS}, ou 0
    tamanho: '',          //valorX ou[lista TAMANHO_DO_COPO funcao(inputRadio)]
    tipo:  '',            //0 ou [lista TIPO_DE_ACAI funcao(inputRadio)]
    um: '',               // unidade de medida
    listaDeAdicionais: [
        {
            id: '',       //nome sem espaços
            nome:'',      //
            valor:'',     //
            premium:'',   //
        }
    ],
}


function adicionarItem(){
    const inputs  = document.querySelectorAll(".qtdItem")
    const todosItens = DB_PRODUTOS_E_ADICIONAIS

    inputs.forEach(input => {
        todosItens.forEach(itens => {
            itens.forEach(item => {
                if(input.id === item.id){
                    console.log(input.id)
                    console.log(item.id)
                }
            })
        });
    })


}












