const mostraHora = () => new Date().toLocaleTimeString('pt-BR', {
    hour12: false
})

//executa várias vezes dependendo do intervalo
const timer = setInterval( () => console.log(mostraHora()), 1000)

// executa apenas uma vez de acordo com o intervalo
setTimeout(()=>clearInterval(timer), 5000)