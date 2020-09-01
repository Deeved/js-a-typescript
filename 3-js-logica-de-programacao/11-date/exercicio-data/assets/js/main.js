const display = document.querySelector('h3')

const data = new Date()

const zeroLeft = num => num >= 10 ? num : `0${num}`

const getDescMonth = m => {
    const MONTHS = [
        'Janiero', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    return MONTHS[m]
}

const getDayWeek = day => {
    const DAYWEEK = [ 'Domingo', 'Segundo', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ]
    
    return (DAYWEEK[day] + '-feira')
}

const formatDate = date => {
    
    let dia = zeroLeft(date.getDate())
    let mes = zeroLeft(date.getMonth())
    let ano = zeroLeft(date.getFullYear())
    let diaSemana = zeroLeft(date.getDay())

    let hora = zeroLeft(date.getHours())
    let minutos = zeroLeft(date.getMinutes())

    return `${getDayWeek(parseInt(diaSemana))}, ${dia} de ${getDescMonth(parseInt(mes))} de ${ano} ${hora}:${minutos}`

}

let dataFormatada = formatDate(data)
display.innerHTML = dataFormatada
