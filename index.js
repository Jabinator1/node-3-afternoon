require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { getOne, getAll, update, create, deleteFn } = require('./controller')
const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive({connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}})
.then(db => {app.set('db', db); console.log("Connected to database.")})
.catch(err => console.log(err))


app.post("/api/products", create)
app.get("/api/products", getAll)
app.get("/api/products/:id", getOne)
app.put("/api/products/:id", update)
app.delete("/api/products/:id", deleteFn)


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`))