// es5 anonymous function
const add = function(a,b){
    return a + b
}

//es6 arrow



const numbers = [10,15,20,25]

const result1 = numbers.filter(function(ele){
    return ele % 2 == 0
})
console.log(result1)

// using arrow function