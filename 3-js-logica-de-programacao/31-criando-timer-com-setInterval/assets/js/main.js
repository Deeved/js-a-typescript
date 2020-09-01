const display = document.querySelector('p')
const buttons = document.querySelectorAll('button')

const [iniciar, pausar, zerar] = buttons

let segundos = 0 
let timer 

const getTimer = (segundos) => {
    const date = new Date( segundos * 1000 ) //transforma em milissegundos
    return date.toLocaleTimeString('pt-BR', {timeZone: 'GMT'})
}

iniciar.addEventListener('click', () =>{
    display.classList.remove('Red')
    clearInterval(timer)
    timer = setInterval( ()=> {
        segundos++
        display.innerHTML = getTimer(segundos)
    }, 1000)

})

zerar.addEventListener("click", () => {
    display.innerHTML = '00:00:00'
    segundos = 0
    display.classList.add('Red')
})

pausar.addEventListener("click", () => {
    display.classList.add('Red')
    setTimeout(()=>{
        clearInterval(timer)
    },0)
    console.log(timer)
})