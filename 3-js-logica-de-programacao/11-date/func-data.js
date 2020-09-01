const zeroAEsquesda = (num) => num >=10 ? num : `0${num}`

const formataData = data => {
    const DIASEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quita', 'Sexta', 'Sábado']

    let dia = zeroAEsquesda(data.getDate())
    let mes = zeroAEsquesda(data.getMonth() + 1)
    let ano = zeroAEsquesda(data.getFullYear())
    let hora = zeroAEsquesda(data.getHours())
    let minutos = zeroAEsquesda(data.getMinutes())
    let segundos = zeroAEsquesda(data.getSeconds())

    return `${DIASEMANA[data.getDay()]} - ${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)