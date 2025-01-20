
const ADICIONAIS = [
    {
        id: 'uva',
        nome: 'Uva',
        valor: 1,
        premium: false,
    },
    {
        id: 'morango',
        nome: 'Morango',
        valor: 1,
        premium: false,
    },
    {
        id: 'banana',
        nome: 'Banana',
        valor: 1,
        premium: false,
    },
    {
        id: 'ovomaltine',
        nome: 'Ovomaltine',
        valor: 1,
        premium: false,
    },
    {
        id: 'pacoca',
        nome: 'Paçoca',
        valor: 1,
        premium: false,
    },
    {
        id: 'granola',
        nome: 'Granola',
        valor: 1,
        premium: false,
    },
    {
        id: 'leiteninho',
        nome: 'Leite Ninho',
        valor: 1,
        premium: false,
    },
    {
        id: 'leitecondensado',
        nome: 'Leite Condensado',
        valor: 1,
        premium: false,
    },
    {
        id: 'caldadechocolate',
        nome: 'Calda de Chocolate',
        valor: 1,
        premium: false,
    },
    {
        id: 'caldademorango',
        nome: 'Calda de Morango',
        valor: 1,
        premium: false,
    },
    {
        id: 'nutella',
        nome: 'Nutella',
        valor: 1,
        premium: true,
    },
    {
        id: 'mem',
        nome: 'M&m',
        valor: 1,
        premium: true,
    },
    {
        id: 'kitkat',
        nome: 'KitKat',
        valor: 1,
        premium: true,
    },
] 


function salva_ADICIONAIS_LocalStorage(){
    localStorage.setItem("ADICIONAIS", JSON.stringify(ADICIONAIS))
}salva_ADICIONAIS_LocalStorage()


function get_ADICIONAIS_LocalStorage(){
    const ADICIONAIS = JSON.parse(localStorage.getItem("ADICIONAIS")) || [] ;
    return ADICIONAIS
}


