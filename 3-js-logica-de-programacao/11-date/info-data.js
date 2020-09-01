/*
    const tresHoras = 60 * 60 * 3 * 1000 // 3 horas em milésimos de segundos
    const umDia = 3600 * 24 * 1000 // 1 dia em milésimos de segundos


    new Date()
    new Date(valor) valor igual a milésimos de seguindos. se for 0 é referente a 01/01/1970
    new Date(paserString) string referente a uma data no formato ano-mes-dia hora-minuto-segundo
    exemplo: new Date('2020-08-31 23:57:34')

    new Date(2019, 03, 20, 1, 3, 4, 999 )  ano, mes, dia, hora, minutos, segundo, milésimo de segundo
    obs. o mes vai de 0-11 [0 - janeiro e 11 - dezembro] 
*/ 

const date = new Date('2019-04-20 20:36:45:100')
console.log('Dia', date.getDate())
console.log('Mes', date.getMonth()) // 0 - janeiro e 11 - dezembro
console.log('Ano', date.getFullYear())
console.log('Hora', date.getHours())
console.log('Minutos', date.getMinutes())
console.log('Segundos', date.getSeconds())
console.log('Milisegundos', date.getMilliseconds())
console.log('Dia da semana', date.getDay()) // 0 - Domingo e 6 - Sábado 


console.log(date.toString())

console.log(Date.now()) // obtem a data atual, mas em milesimos de segundo
console.log(Date(1598929849921))