

const ADICIONAIS = [
    {   id: 'leitecondensado',
        nome:'leite condensado',
        valor: 1, 
        premium: false
    },
    {   id: 'caldadechocolate',
        nome:'calda de chocolate',
        valor: 1, 
        premium: false
    },
    {   id: 'caldademorango',
        nome:'calda de morango',
        valor: 1,
        premium: false
    },
    {   id: 'morango',
        nome:'morango',
        valor: 1, 
        premium: false
    },
    {   id: 'uva',
        nome:'uva',
        valor: 1, 
        premium: false
    },
    {   id: 'banana',
        nome:'banana',
        valor: 1, 
        premium: false
    },
    {   id: 'ovomaltine',
        nome:'ovomaltine',
        valor: 1, 
        premium: false
    },
    {   id: 'leiteninho',
        nome:'leite ninho',
        valor: 1, 
        premium: false
    },
    {   id: 'pacoca',
        nome:'pacoca',
        valor: 1, 
        premium: false
    },
    {   id: 'granola',
        nome:'granola',
        valor: 1, 
        premium: false
    },
    {   id: 'mem',
        nome:'mem',
        valor: 3, 
        premium: true 
    },
    {   id: 'kitkat',
        nome:'kitkat',
        valor: 4, 
        premium: true 
    },
    {   id: 'nutella',
        nome:'nutella',
        valor: 5, 
        premium: true 
    },
]

function f_ADICIONAIS(){
    localStorage.setItem("ADICIONAIS", JSON.stringify(ADICIONAIS))
}f_ADICIONAIS()




