
const AÇAIS = [
    {   id:'copo200ml', 
        nome:'Copo 200ml',
        valor: 10, 
        categoria: 'AÇAIS'
    },
    {   id:'copo300ml', 
        nome:'Copo 300ml',
        valor: 16, 
        categoria: 'AÇAIS'
    },
    {   id:'copo500ml', 
        nome:'Copo 500ml',
        valor: 20, 
        categoria: 'AÇAIS'
    },
]

const BEBIDAS = [
    {   id:'aguacomgas',
        nome:'Água com gás',
        valor: 4, 
        categoria: 'BEBIDAS',
    },
    {   id:'aguasemgas',
        nome:'Água sem gás',
        valor: 3, 
        categoria: 'BEBIDAS'
    },
    {   id:'guarana300ml',
        nome:'Guaraná 300ml',
        valor: 5, 
        categoria: 'BEBIDAS'
    },
    {   id:'cocacola300ml',
        nome:'Coca-Cola 300ml',
        valor: 5, 
        categoria: 'BEBIDAS'
    },
]

const SALGADOS = [
    {   id:'refinatachurrasco',
        nome:'Refinata Churrasco',
        valor: 4, 
        categoria:'SALGADOS'
    },
    {   id: 'refinatacostelinha' , 
        nome:'Refinata Costelinha',     
        valor: 4, 
        categoria: 'SALGADOS'
    },
    {   id: 'cronycebolaesalca' , 
        nome:'Crony Cebola e Salça',
        valor: 4, 
        categoria: 'SALGADOS'
    },
    {   id: 'refinatapicanhaealho' , 
        nome:'Refinata Picanha e Alho',
        valor: 4, 
        categoria: 'SALGADOS'
    },
]

const DOCES = [
    {   id: 'kitkat',
        nome:'KitKat',
        valor: 4,   
        categoria: 'DOCES'
    },
    {   id: 'pirulitobig', 
        nome:'Pirulito Big',
        valor: 0.5, 
        categoria: 'DOCES'
    },
    {   id: 'pacoca', 
        nome:'Paçoca',
        valor: 0.5, 
        categoria: 'DOCES'
    },
    {   id: 'balinhas', 
        nome:'Balinhas',
        valor: 0.2, 
        categoria: 'DOCES'
    },    
]

const CATEGORIAS = {
    acais:    AÇAIS,
    doces:    DOCES,
    bebidas:  BEBIDAS,
    salgados: SALGADOS
}


function f_CATEGORIAS(){
    localStorage.setItem("CATEGORIAS", JSON.stringify(CATEGORIAS))
}f_CATEGORIAS()




