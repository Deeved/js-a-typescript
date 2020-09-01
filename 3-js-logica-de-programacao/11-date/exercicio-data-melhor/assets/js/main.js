const display = document.querySelector('h3')

const data = new Date()

display.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' })