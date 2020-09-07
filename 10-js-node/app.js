const path = require('path')
const caminho = path.resolve(__dirname, 'test.json')
// const escrever = require('./modules/escrever')
const ler = require('./modules/ler')
/*
const pessoas = [
    {nome: 'Deeved'},
    {nome: 'Natalia'},
    {nome: 'Sofia'},
]
const json = JSON.stringify(pessoas, '', 2)
escrever(caminho, json)
*/

async function leArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    console.log(dados)
}

leArquivo(caminho)