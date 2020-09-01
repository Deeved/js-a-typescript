const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const criaElemento = (elem, txt) => {
    let elemento = document.createElement(elem)
    let textElemento = document.createTextNode(txt+'  ')
    elemento.appendChild(textElemento)
    return elemento
}

const limparInput = () => {
    input.value = ''
    input.focus()
}

const construtorList = (tarefa) =>{
    if(!input.value && !tarefa ) return
    
    let button = criaElemento('button', 'Apagar')

    let li = (!tarefa) ? criaElemento('li', input.value) : criaElemento('li', tarefa)

    button.setAttribute('class', 'Apagar')
    li.appendChild(button)
    ul.appendChild(li)
    
    limparInput()
    salvarLista()
}

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter') construtorList()
})

button.addEventListener('click', () => {
    construtorList()
})

// clicando no botão apagar
document.addEventListener('click', e => {
    const el = e.target

    if(el.classList.contains('Apagar')){
        el.parentElement.remove()
        salvarLista()
    }
})

//salvando no storage do navegado
const salvarLista = () => {
    const ulListaTarefas = ul.querySelectorAll('li')
    const listaTarefas = []

    for (const tarefa of ulListaTarefas) {
        let [t] = tarefa.innerHTML.split('<button')
        listaTarefas.push(t.trim())
    }

    const tarefasJson = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

const adicionarTarefas = () => {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (const tarefa of listaDeTarefas) {
        construtorList(tarefa)
        console.log(tarefa)
    }
}

adicionarTarefas()