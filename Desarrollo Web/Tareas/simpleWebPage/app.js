"use strict"

import express from 'express'
import fs from 'fs';


const app = express()
const port = 5003;

app.use(express.static('public'))
app.use(express.json())

app.get("/", (req, res) => {
    const file = fs.readFileSync('public/html/webPage.html', 'utf8')
    res.status(200).send(file)
})

app.get("/hello", (req, res) => {
    const salute = "Hello from Server"
    console.log(req.query) 
    res.status(200).send(salute)

})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})