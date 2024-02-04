const app = require('express')()
const port = 2000
const express = require('express')
const cors = require('cors')
const dt7 = require("dt7")
const data = new dt7()

app.use(cors());

app.use(express.json());

app.listen(2000, () => {
  console.log("live now on " + port)
})

app.get('/', (req, res) => {
  res.send(data.get("text"))
})

app.post('/', (req, res) => {
  data.save("text", req.body.text + "\n")
  res.sendStatus(200)
})