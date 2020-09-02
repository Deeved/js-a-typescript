function criaCalculadora (){

    return {

        display: document.querySelector('input'),

        iniciar() {
            this.display.focus()
            this.cliqueBotoes()  
        },

        cliqueBotoes() {
            button = document.addEventListener('click', e =>{
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.paraDisplay(el.innerText)
                }

                if(el.classList.contains('btn-apagar')){
                    this.apagarDisplay()
                }

                if(el.classList.contains('btn-limpar')){
                    this.limparCaracter()
                }

                if(el.classList.contains('btn-calcular')){
                    this.calcular()
                }
            })
        },

        paraDisplay(valor){
            this.display.value += valor
        },

        apagarDisplay(){
            this.display.value = ''
            this.display.focus()
        },

        limparCaracter(){
            this.display.value = this.display.value.slice(0,-1)
        },

        calcular(){
            let copyDisplay = this.display.value
            
            try{
                this.display.value = eval(this.display.value)

            }catch(e){
                this.display.value = 'Operação Inválida!'

                setTimeout( ()=> this.display.value = copyDisplay, 1500)
            }
        },
    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()