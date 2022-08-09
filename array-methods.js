const players = ['sachin','shewag', 'rahul']
console.log(players.length) // 3

console.log(players[5]) // undefined
console.log(players[0]) // 'sachin'
// access the last element within the array
console.log(players[players.length - 1]) // 'rahul'

// push method used to add element/s to the end of the array
// returns the new length of the array
console.log(players.push('dhoni')) // 4
console.log(players) // 

// unshift method used to add element/s to the beginning of the array
// reutrns the new length of the array
console.log(players.unshift('saurav')) // 5
console.log(players)

// remove element from the end of the array
// returns the removed element
console.log(players.pop())
console.log(players)

// remove element from the beginning of the array
// returns the removed element
console.log(players.shift())
console.log(players)


// re assign - re declare
// players = ['mark', 'steve']
// const players = ['mark']