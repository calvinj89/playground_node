// setTimeout( () => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Malayah', 'Mashari', 'CJ']

// const shortName = names.filter( (name)=> {
//     return name.length > 4
// })

// const geocode = (address, callback) =>{
    
//     setTimeout( () => {
//         const data = {
//             latitude: 0,
//             longitude: 0   
//         }
//         callback(data)
//     }, 2000)

// }

// geocode('Atlanta', (data) => {
//     console.log(data)
// })

// console.log(shortName)

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (op1, op2, callback) =>{
    setTimeout( () => {
        const sum = op1 + op2     
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
