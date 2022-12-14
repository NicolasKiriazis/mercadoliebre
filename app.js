// Kit invocador de express

const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))

// Levantar servidor

app.listen(process.env.PORT || 3000, () => { console.log("El servidor se levantó con éxito") })


app.get("/", function (req, res) {
    let ruta = path.resolve(__dirname, './views/index.html')

    res.sendFile(ruta)
})

// app.get("/register", function (req, res) {
//     let ruta2 = path.resolve(__dirname, './views/register.html')

//     res.sendFile(path.resolve(ruta2))
// })

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})