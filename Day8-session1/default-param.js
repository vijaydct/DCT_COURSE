// es5
function add(a,b) {
    console.log(a,b)
    // a = typeof a == 'undefined' ? 0 : a 
    // a = a == undefined ? 0 : a
    a = a || 0 
    b = b || 0
    console.log(a, b)
    return a + b 
}
// if less is passed, parameters will undefined
console.log(add()) // 0
console.log(add(10)) // 10
console.log(add(10,20)) // 30
console.log(add(10,20,50)) // 30
// if extra arguments are passed, extra is ignored

// es6 
function sum(m = 0, n = 0) {
    console.log(m,n)
    return m + n 
}

console.log(sum())
console.log(sum(10))
console.log(sum(10,20))