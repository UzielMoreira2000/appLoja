

function getCATEGORIAS_LocalStorage (categoria){
    objetoExport = []
    const CATEGORIAS = JSON.parse(localStorage.getItem("CATEGORIAS")) || [] ;
    CATEGORIAS.forEach(itemCategoria => {
      itemCategoria.forEach(produto => {
        if(produto.categoria == categoria){
          objetoExport.push(produto)
        }
      })
    })
    return objetoExport
}


function getADICIONAIS_LocalStorage (){
    const objetoExport = JSON.parse(localStorage.getItem("ADICIONAIS")) || [] ;
    return objetoExport
}














