
const AÇAIS = [
    {   id:'copo200ml', 
        nome:'Copo 200ml',
        valor: 10, 
        categoria: 'AÇAIS',
        input: 'radio'
    },
    {   id:'copo300ml', 
        nome:'Copo 300ml',
        valor: 16, 
        categoria: 'AÇAIS',
        input: 'radio'
    },
    {   id:'copo500ml', 
        nome:'Copo 500ml',
        valor: 20, 
        categoria: 'AÇAIS',
        input: 'radio'
    },
]

const BEBIDAS = [
    {   id:'aguacomgas',
        nome:'Água com gás',
        valor: 4, 
        categoria: 'BEBIDAS',
        input: 'checkbox'
    },
    {   id:'aguasemgas',
        nome:'Água sem gás',
        valor: 3, 
        categoria: 'BEBIDAS',
        input: 'checkbox'
    },
    {   id:'guarana300ml',
        nome:'Guaraná 300ml',
        valor: 5, 
        categoria: 'BEBIDAS',
        input: 'checkbox'
    },
    {   id:'cocacola300ml',
        nome:'Coca-Cola 300ml',
        valor: 5, 
        categoria: 'BEBIDAS',
        input: 'checkbox'
    },
]

const SALGADOS = [
    {   id:'refinatachurrasco',
        nome:'Refinata Churrasco',
        valor: 4, 
        categoria:'SALGADOS',
        input: 'checkbox'
    },
    {   id: 'refinatacostelinha' , 
        nome:'Refinata Costelinha',     
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox'
    },
    {   id: 'cronycebolaesalca' , 
        nome:'Crony Cebola e Salça',
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox'
    },
    {   id: 'refinatapicanhaealho' , 
        nome:'Refinata Picanha e Alho',
        valor: 4, 
        categoria: 'SALGADOS',
        input: 'checkbox'
    },
]

const DOCES = [
    {   id: 'kitkat',
        nome:'KitKat',
        valor: 4,   
        categoria: 'DOCES',
        input: 'checkbox'
    },
    {   id: 'pirulitobig', 
        nome:'Pirulito Big',
        valor: 0.5, 
        categoria: 'DOCES',
        input: 'checkbox'
    },
    {   id: 'pacoca', 
        nome:'Paçoca',
        valor: 0.5, 
        categoria: 'DOCES',
        input: 'checkbox'
    },
    {   id: 'balinhas', 
        nome:'Balinhas',
        valor: 0.2, 
        categoria: 'DOCES',
        input: 'checkbox'
    },    
]

const CATEGORIAS = [
    AÇAIS, DOCES, BEBIDAS, SALGADOS
]



function f_CATEGORIAS(){
    localStorage.setItem("CATEGORIAS", JSON.stringify(CATEGORIAS))
}f_CATEGORIAS()




