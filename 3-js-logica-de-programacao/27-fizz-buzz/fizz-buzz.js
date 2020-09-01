const fizzbuzz = num => {
    if(isNaN(num)) return num

    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }else if(num % 5 === 0) {
        return 'Buzz'
    }else if(num % 3 === 0){
        return 'Fizz'
    }else{
        return num
    }
}

for (let index = 0; index <= 100; index++) {
    console.log(index, fizzbuzz(index))
}