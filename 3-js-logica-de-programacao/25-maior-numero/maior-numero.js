const maior = (a, b) => a > b ? a : b

console.log(`o maior numero é: ${ maior(50, maior(125,40)) }`)


numeros = [ 1, 3, 565, 694, 516, 6610, 2155, 58, 626, 354947, 661641, 5151514, 5, 2355 ]

let m = numeros.reduce(maior)

console.log(m)