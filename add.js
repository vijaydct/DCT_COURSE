function add() {
	return 10 + 20 
}
add();


function print() { 
    var msg = 'ola'
    if (true) { 
        // iife - immediately invoked function express
        // use var keyword & provide block scope
        (function(){ // anonymous function - a function without a name
            var msg = 'hello there'
            msg = msg.toUpperCase()
            console.log(msg)
        }())
    }
    return msg
}

console.log(print()) // 'ola'


// es5 - 2009
// declare a variable & not assign 
var city 
console.log(city) // undefined 

// declare a variable & assign a value to it 
var name = 'dct'

// re assigning value 
name = 'dct academy'

// re declaring the variable
var name = 'ani' 

// es6 - 2015 ( es2015 )
// let 
// declaring and assigning 
let person = 'sachin'