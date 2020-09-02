const numeros = [6, 35, 14, 0, 4, 98, 7, 5, 15,32,7]

let count = 0
numeros.map( (item) => item > 10 ? count++ : '') 


// filter

let maiorQueDez = numeros.filter(item => item > 10)
console.log(maiorQueDez.length)