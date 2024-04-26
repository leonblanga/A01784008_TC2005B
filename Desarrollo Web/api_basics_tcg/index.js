"use strict"

import express from 'express'


const app = express()
import {cardRouter} from './cards.js';

const PORT = 3001;
app.use(express.json());

app.use('/cards', cardRouter);

app.get("/", (req, res) => {
    const salute = "Hello from Server"
    console.log(req.query) 
    res.status(200).send(salute)

});
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});