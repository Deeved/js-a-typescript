const arr = ['agua', 'ar', 'fogo', 'vento']

/*
    for classico - geralmente com itaraveis [arrays e strings]
    for in - retorna índice ou chave [ arrays, strings e objetos]
    for of - retorna valor em si (sem indice) [ arrays e strings ]

*/ 

// for clássico 
console.log('For clássico')
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])   
}

// for in
console.log('\nFor in')
for (let index in arr){
    console.log(arr[index])
}

// for of
console.log('\nFor of')
for (let valor of arr){
    console.log(valor)
}

// for each
console.log('\nFor each')
arr.forEach( (valor, indice, arr) => console.log(valor, indice, arr) )
