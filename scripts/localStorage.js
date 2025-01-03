

function getCATEGORIAS_LocalStorage(categoria, idItemExpecifico=0){
    objetoExport = []
    // console.log(categoria)
    // console.log(idItemExpecifico)
    const CATEGORIAS = JSON.parse(localStorage.getItem("CATEGORIAS")) || [] ;
    CATEGORIAS.forEach(itemCategoria => {
      itemCategoria.forEach(produto => {
        if(produto.categoria == categoria){
          objetoExport.push(produto)
        }
      })
    })
    if(idItemExpecifico != 0){
      objetoExport = getIdItemDataBase_LocalSorage(idItemExpecifico)
    }
    return objetoExport
}


function getIdItemDataBase_LocalSorage(id){
  var objetoExport = []
  const CATEGORIAS = JSON.parse(localStorage.getItem("CATEGORIAS")) || [] ;
  CATEGORIAS.forEach(categoria => {
    categoria.forEach(item => {
      if(item.id == id){
        objetoExport = item
      }
    })
  })
  return objetoExport
}


function getTipoItemDataBase_LocalSorage(tipo, categoria){
  var objetoExport = []
  const CATEGORIAS = JSON.parse(localStorage.getItem("CATEGORIAS")) || [] ;
  CATEGORIAS.forEach(categoria => {
    categoria.forEach(item => {
      if(item.tipo == tipo){
        if(item.categoria == categoria){
          objetoExport.push(item)
        }
      }
    })
  })
  return objetoExport

}



function getADICIONAIS_LocalStorage (){
    const objetoExport = JSON.parse(localStorage.getItem("ADICIONAIS")) || [] ;
    return objetoExport
}














