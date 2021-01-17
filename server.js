import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express()
const port = process.env.PORT | 8000

// Middleware

// Database config

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello world!")
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))