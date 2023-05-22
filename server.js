import express from "express";
import cors from 'cors';
import { create, update, findAll, findOne, del } from './controller.js'
import { sequelize } from "./database.js";

const app = express()
let corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

sequelize.sync().then(() => {
    console.log('Database Sync')
}).catch((err) => {
    console.error('Failed to sync database: ' + err)
})

app.post('/', (req, res) => {
    create(req, res)
})

app.put('/:id', (req, res) => {
    update(req, res)
})

app.get('/', (req, res) => {
    findAll(req, res)
})

app.get('/:id', (req, res) => {
    findOne(req, res)
})

app.delete('/:id', (req, res) => {
    del(req, res)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})