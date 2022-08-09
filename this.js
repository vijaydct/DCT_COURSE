// outside function
console.log(this) // {}

function print() {
    // inside a function
    console.log(this) // global object
}
print()

const person = {
    name: 'arjun',
    details: function(){
        // inside a method 
        console.log(this) // current object
    }
}
person.details()