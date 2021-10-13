const http = require('http')

const url = "http://api.weatherstack.com/current?access_key=dd8ce3f6c91fdc24d745b9c76e08ddc5&query=40,-75&units=f"

const request = http.request(url,  (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()