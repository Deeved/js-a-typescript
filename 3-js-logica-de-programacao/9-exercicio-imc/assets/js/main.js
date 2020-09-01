const form = document.querySelector('form')
const mensagem = document.getElementById('mensagem')
const campoPeso = document.getElementById('peso')
const campoAltura = document.getElementById('altura')

form.addEventListener('submit', event => {
    event.preventDefault()
    let peso = campoPeso.value
    let altura = campoAltura.value

    if(!peso || peso < 9.2 || peso > 595) {
        conf_error('peso')
    } else if (!altura || altura < 0.4 ||altura > 2.5) {
        conf_error('altura')
    } else {
        mensagem.classList.remove('Red')
        imc(peso, altura)
    }
})

function conf_error(nome) {
    mensagem.innerHTML =`Campo ${nome} inválido`
    mensagem.classList.add('Red')
}

const imc = (peso, altura) => {
    let imc = parseFloat(peso) / (parseFloat(altura) * 2)
    let classificacao = ''

    if (imc < 18.5 ) classificacao = '(Abaixo do peso)'

    if (imc >= 18.5 && imc < 24.9 ) classificacao = '(Peso normal)'

    if (imc >= 25 && imc < 29.9 ) classificacao = '(Sobrepeso)'

    if (imc >= 30 && imc < 34.9 ) classificacao = '(Obesidade grau 1)'

    if (imc >= 35 && imc < 39.9 ) classificacao = '(Obesidade grau 2)'

    if (imc >= 40 ) classificacao = '(Obesidade grau 3)'

    mensagem.innerHTML = `Seu IMC é ${(imc).toFixed(2)} ${classificacao}`
    mensagem.classList.add('Green')
}