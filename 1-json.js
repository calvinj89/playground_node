const fs = require('fs')

//const book = {
//    title: "Mashari Book",
//    author: "Malayah Wilson"
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)
//console.log(bookJSON)
//const parseData = JSON.parse(bookJSON)
//console.log(parseData.title)

//const dataBuffer = fs.readFileSync('1-JSON.json')
//const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.author)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Calvin'
data.age = 49

const bookJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', bookJSON)