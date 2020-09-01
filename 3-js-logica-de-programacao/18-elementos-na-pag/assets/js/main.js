const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const section = document.querySelector("section")
const div = document.createElement('div')

elementos.map( item => {
    let { tag, texto } = item
    let element = document.createElement(tag)
    elementText = document.createTextNode(texto)
    element.appendChild(elementText)
    div.appendChild(element)
})

section.appendChild(div)


/* usando o for in

    for (let item in elementos) {
        let { tag, texto } = elementos[item]
        let element = document.createElement(tag)
        elementText = document.createTextNode(texto)
        element.appendChild(elementText)
        div.appendChild(element)
    }
*/