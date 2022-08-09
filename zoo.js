const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
]

console.log(myZoo[0]) // [ 'King Kong', [ 'gorilla', 42 ] ]
console.log(myZoo[0][0]) // 'King Kong'
console.log(myZoo[0][1]) // [ 'gorilla', 42 ]
console.log(myZoo[0][1][0]) // 'gorilla'
console.log(myZoo[0][1][1]) // 42

function zooInventory(myZoo) {

}

console.log(zooInventory(myZoo))
/*
[
  'King Kong the gorilla is 42',
  'Nemo the fish is 5',
  'Phil the groundhog is 11'
]
*/