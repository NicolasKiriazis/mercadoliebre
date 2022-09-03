// Kit invocador de express

const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))

// Levantar servidor

app.listen(3000, ()=> {console.log("El servidor se levantó con éxito")})


app.get("/", function(req,res){
    let ruta = path.resolve(__dirname, './views/index.html')

    res.sendFile(ruta)
})