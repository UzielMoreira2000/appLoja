
const TIPOS = [
    'cupuaçu', 'misto', 'açai'
]

const AÇAIS = [
    {
        id:'copo200ml',
        nome:'Copo 200ml',
        valor:10,
        tamanho:200,
        um: 'ml',
        tipo: TIPOS,
    },
    {
        id:'copo300ml',
        nome:'Copo 300ml',
        valor:16,
        tamanho:300,
        um: 'ml',
        tipo: TIPOS,
    },
    {
        id:'copo500ml',
        nome:'Copo 500ml',
        valor:20,
        tamanho:500,
        um: 'ml',
        tipo: TIPOS,
    },
] 

const BEBIDAS = [
    {
        id:'cocacola',
        nome:'Coca-Cola',
        valor:5,
        tamanho:350,
        um: 'ml',
    },
    {
        id:'guarana',
        nome:'Guaraná',
        valor:4,
        tamanho:350,
        um: 'ml',
    },
    {
        id:'aguacomgas',
        nome:'Água com Gás',
        valor:4,
        tamanho:500,
        um: 'ml',
    },
    {
        id:'aguasemgas',
        nome:'Água sem Gás',
        valor:3,
        tamanho:500,
        um: 'ml',
    },
]

const SALGADOS = [
    {
        id:'cronycebola',
        nome:'Crony Cebola',
        valor:4,
        tamanho:150,
        um: 'g',
    },
    {
        id:'refinatachurrasco',
        nome:'Refinata Churrasco',
        valor:4,
        tamanho:150,
        um: 'g',
    },
    {
        id:'refinatapicanhaealho',
        nome:'Refinata Picanha e Alho',
        valor:4,
        tamanho:150,
        um: 'g',
    },
    {
        id:'refinata',
        nome:'Refinata',
        valor:4,
        tamanho:150,
        um: 'g',
    },
]

const DOCES = [
    {
        id:'pirulito',
        nome:'Pirulito Big',
        valor: 0.5,
        tamanho: '',
        um: '',
    },
    {
        id:'balinhafregells',
        nome:'Balinha Fregells',
        valor: 0.2,
        tamanho: '',
        um: '',
    },
    {
        id:'balinhaflorestal',
        nome:'Balinha Florestal',
        valor: 0.2,
        tamanho: '',
        um: '',
    },
    {
        id:'pacoca',
        nome:'Paçoca',
        valor: 1,
        tamanho: '',
        um: '',
    },
]

const CATEGORIAS = [
    {
        id: 'acais',
        nome: 'Açais', 
        itens: AÇAIS,
        input: 'radio',
    },
    {
        id: 'bebidas', 
        nome: 'Babidas', 
        itens: BEBIDAS,
        input: 'checkbox',
    },
    {
        id: 'salgados', 
        nome: 'Salgados', 
        itens: SALGADOS,
        input: 'checkbox',
    },
    {
        id: 'doces', 
        nome: 'Doces', 
        itens: DOCES,
        input: 'checkbox',
    },
]


function salva_CATEGORIAS_LocalStorage(){
    localStorage.setItem("CATEGORIAS", JSON.stringify(CATEGORIAS))
}salva_CATEGORIAS_LocalStorage()


function get_CATEGORIAS_LocalStorage(){
    const CATEGORIAS = JSON.parse(localStorage.getItem("CATEGORIAS")) || [] ;
    return CATEGORIAS
}get_CATEGORIAS_LocalStorage()















