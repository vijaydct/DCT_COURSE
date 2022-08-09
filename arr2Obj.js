const arr = [['white', 'peace'],['blue', 'ocean breeze']]
function arr2Obj(arr) {
    const result = {}
    arr.forEach(function(ele){
        result[ele[0]] = ele[1]
    })
    return result
}

console.log(arr2Obj(arr)) // { 'white' : 'peace', 'blue' : 'ocean breeze }