import express from 'express';
import fs from 'fs'
import cors from 'cors'


const app = express();
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept, Authorization')
    res.header('Access-Control-Allow-Content-Type', 'application/json')
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    fs.readFile('./package.json', {encoding: 'utf8'}, (err, data) => {
        const obj = JSON.parse(data)
        res.send(obj.name)
    });
})
app.post('/change', (req, res) => {
    console.log(req.body)
    return res.send(req.body)
})
app.listen(80)