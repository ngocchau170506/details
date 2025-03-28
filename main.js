import express from 'express'
const app = express()

app.use (express.json())

app.route('/')
    .get((req, res) => {
        res.send("Hello Chau")
    })
const Port = process.env.Port || 3000;
app.listen(Port, (req, res) => {
    console.log(`Server run at http://localhost:${Port}`)
})