var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${ process.env.API_KEY }`);

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/api-key', function (req, res) {
    res.send({ apiKey: process.env.API_KEY })
})

// designates what port the app will listen to for incoming requests
app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
})

