
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

let cincoLetras = pessoas.filter( pessoa => pessoa.nome.length > 4)
let maiorQue50 = pessoas.filter( pessoa => pessoa.idade > 50 )
// let nomeTerminadoComA = pessoas.filter( pessoa => pessoa.nome[ pessoa.nome.length -1 ] === 'a')
let nomeTerminadoComA = pessoas.filter( pessoa => pessoa.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminadoComA)