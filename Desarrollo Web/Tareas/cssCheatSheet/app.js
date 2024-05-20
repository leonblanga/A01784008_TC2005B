"use strict";

import express from 'express';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    const file = fs.readFileSync('public/html/css_cheat_sheet.html', 'utf8');
    res.status(200).send(file);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});