import express from 'express'
import fs from 'fs';
import https from 'https';
import router from './routes.js'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors()),

app.use(router);

//app.listen(3000, ()=> console.log("Api Rodando."))

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key:fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () =>console.log("Rodando em Https"))