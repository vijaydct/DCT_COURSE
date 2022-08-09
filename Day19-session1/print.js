console.log('1')
setTimeout(()=>{
    console.log('2')
}, 100) // 100 is minimum time to get execute the code
console.log('3')
for(let i=0; i<1000; i++){
    console.log(i)
}

// you can put nested setTimeout
console.log('1')
setTimeout(()=>{
    console.log('2')
    setTimeout(()=>{
        console.log('3')
    }, 100)
}, 100) // 100 is minimum time to get execute the code
for(let i=0; i<1000; i++){
    console.log(i)
}

// you can write like this also
console.log('1')
setTimeout(()=>{
    console.log('2')
}, 100) // 100 is minimum time to get execute the code
setTimeout(()=>{
    console.log('3')
}, 100)
for(let i=0; i<1000; i++){
    console.log(i)
}