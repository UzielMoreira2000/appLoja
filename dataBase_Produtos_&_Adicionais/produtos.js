
const FRETE = [
    {   id:'consumirnolocal', 
        nome:'Consumir no Local',
        valor: 0, 
        categoria: 'AÇAIS',
        input: 'radio',
        tipo: 'localdeconsumo',
    },
    {   id:'frete', 
        nome:'Frete',
        valor: 5, 
        categoria: 'AÇAIS',
        input: 'radio',
        tipo: 'localdeconsumo',
    }
]

const AÇAIS = [
    {   id:'copo200ml', 
        nome:'Copo 200ml',
        valor: 10, 
        categoria: 'AÇAIS',
        input: 'radio',
        tipo: 'produto',
    },
    {   id:'copo300ml', 
        nome:'Copo 300ml',
        valor: 16, 
        categoria: 'AÇAIS',
        input: 'radio',
        tipo: 'produto',
    },
    {   id:'copo500ml', 
        nome:'Copo 500ml',
        valor: 20, 
        categoria: 'AÇAIS',
        input: 'radio',
        tipo: 'produto',
    },
]

const BEBIDAS = [
    {   id:'aguacomgas',
        nome:'Água com gás',
        valor: 4, 
        categoria: 'BEBIDAS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id:'aguasemgas',
        nome:'Água sem gás',
        valor: 3, 
        categoria: 'BEBIDAS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id:'guarana300ml',
        nome:'Guaraná 300ml',
        valor: 5, 
        categoria: 'BEBIDAS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id:'cocacola300ml',
        nome:'Coca-Cola 300ml',
        valor: 5, 
        categoria: 'BEBIDAS',
        input: 'checkbox',
        tipo: 'produto',
    },
]

const SALGADOS = [
    {   id:'refinatachurrasco',
        nome:'Refinata Churrasco',
        valor: 4, 
        categoria:'SALGADOS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'refinatacostelinha' , 
        nome:'Refinata Costelinha',     
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'cronycebolaesalca' , 
        nome:'Crony Cebola e Salça',
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'refinatapicanhaealho' , 
        nome:'Refinata Picanha e Alho',
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox',
        tipo: 'produto',
    },
]

const DOCES = [
    {   id: 'kitkat',
        nome:'KitKat',
        valor: 4,   
        categoria: 'DOCES',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'pirulitobig', 
        nome:'Pirulito Big',
        valor: 0.5, 
        categoria: 'DOCES',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'pacoca', 
        nome:'Paçoca',
        valor: 0.5, 
        categoria: 'DOCES',
        input: 'checkbox',
        tipo: 'produto',
    },
    {   id: 'balinhas', 
        nome:'Balinhas',
        valor: 0.2, 
        categoria: 'DOCES',
        input: 'checkbox',
        tipo: 'produto',
    },    
]

const CATEGORIAS = [
    FRETE , AÇAIS, DOCES, BEBIDAS, SALGADOS
]



function f_CATEGORIAS(){
    localStorage.setItem("CATEGORIAS", JSON.stringify(CATEGORIAS))
}f_CATEGORIAS()




