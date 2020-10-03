const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=a3333f2278f79d2627ed7da147f51cfe&query=Tempe"

request({ url: url, json: true }, (error, response)=>{
    console.log(response.body.current)
})