const section = document.querySelector('section')
const paragrafos = section.querySelectorAll('p')

//pegando stylo do body
const styleBody = getComputedStyle(document.body)
//pegando a cor de fundo do body
const styleBackgroundColorBody = styleBody.backgroundColor

for (let p of paragrafos){
    p.style.backgroundColor = styleBackgroundColorBody
    p.style.borderRadius = '4px'
    p.style.padding = '8px'
}