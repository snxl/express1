const express = require('express')
const app = express()

let array = [
    "nicolas",
    "ivens"
]

app.get("/hello/:usuario", (req, res) => {
    let {usuario} = req.params
    return res.send("hello world" + " " + usuario)
})

app.get('/usuarios', (req, res) => {
    const {nome} =  req.query
    let listaRetorno = array.filter(i => i.includes(nome || ""))
    res.json(listaRetorno)
})

app.listen(80, () => {
    console.log("Servidor rodando")
})